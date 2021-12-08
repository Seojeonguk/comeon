package com.ssafy.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserConferencePostReq;
import com.ssafy.api.response.ConferenceInfoRes;
import com.ssafy.api.response.ConferenceListRes;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.api.response.UserConferenceHistoryRes;
import com.ssafy.api.service.ConferenceHistoryService;
import com.ssafy.api.service.ConferenceService;
import com.ssafy.api.service.UserConferenceService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "유저방 API", tags = {"user", "conference"})
@RestController
@RequestMapping("${ApiPrefix}/room")
public class UserConferenceController {
	@Autowired
	UserService userService;
	
	@Autowired
	ConferenceService conferenceService;
	
	@Autowired
	UserConferenceService userConferenceService;
	
	@Autowired
	ConferenceHistoryService conferenceHistoryService;
	
	@GetMapping("/users/{conference_id}")
	@ApiOperation(value="방 유저 정보 검색", notes="방에 존재하는 유저를 검색하여, 방에 입장가능한지 판단한다.")
	@ApiResponses({
		@ApiResponse(code=200,message="성공")
	})
	public ResponseEntity<? extends BaseResponseBody> getUserInfo(@PathVariable Long conference_id) {
		Conference conference = conferenceService.getConference(conference_id);
		ConferenceRes conferenceRes = conferenceService.ConvertConference(conference);
		List<Map<String,String>> users =  userConferenceService.getUsers(conference_id);
		return ResponseEntity.status(201).body(ConferenceInfoRes.of(201, "Success", conferenceRes, users));
	}
	
	@GetMapping("/conferences/{user_id}")
	@ApiOperation(value="유저 방 정보 검색", notes="유저가 신청한 예약방, 진행중인 방들을 검색한다")
	@ApiResponses({
		@ApiResponse(code=200,message="성공"),
	})
	public ResponseEntity<ConferenceListRes> getConferenceInfo(@PathVariable Long user_id) {
		User user = userService.getUserById(user_id);
		List<Conference> conferecelist = userConferenceService.getConferences(user_id);
		List<ConferenceRes> reslist = new ArrayList<>();
		for(Conference item : conferecelist) {
			reslist.add(conferenceService.ConvertConference(item));
		}
		return ResponseEntity.status(200).body(ConferenceListRes.of(200, "Success", reslist));
	}

//	@GetMapping("/check/{user_id}/{conference_id}")
//	public ResponseEntity<?> checkConference(@PathVariable Long conference_id) {
	
	@PostMapping("/check")
	@ApiOperation(value="방 입장 선택", notes="참가자가 아닌경우 예약방과 진행방을 클릭할 시 모두 해당된다.")
	@ApiResponses({
		@ApiResponse(code=200, message="성공"),
	})
	public ResponseEntity<?> checkConference(@RequestBody UserConferencePostReq userConferenceInfo) {
//		System.out.println(userConferenceInfo.getConferenceId()+" "+userConferenceInfo.getUserId());
		Conference conference = conferenceService.getConference(userConferenceInfo.getConferenceId());
		User user = userService.getUserById(userConferenceInfo.getUserId());
		
		// 방 입장 선택시 인원수 처리를 front에서할지  back에서할지 확인해야한다
		
		// 방 인원 정보수정
		conferenceService.UpdateConferenceMemberPlus(conference.getId());
		// 유저-방 연결
		userConferenceService.createUserConference(user, conference);
		
//		//인원이 다찬 상태라면
//		if (conference.getMaxMember() - conference.getNowMember() < 1) {
//			return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Full Member"));
//		}
//		else {
//			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
//		}
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	@DeleteMapping("/uncheck")
	@ApiOperation(value="방 나가기 선택", notes="방을 나가는 요청. 방에서 제외되며, 방인원수가 1감소한다.")
	@ApiResponses({
		@ApiResponse(code=200, message="성공"),
	})
	public ResponseEntity<?> unCheckConference(@RequestBody UserConferencePostReq userConferenceInfo) {
		Conference conference = conferenceService.getConference(userConferenceInfo.getConferenceId());
		User user = userService.getUserById(userConferenceInfo.getUserId());
		//방 나가기를 선택햇을때 수행해야 하는 일
		/*
		 * 1. 방 인원수에서 1감소한다
		 * 2. conference_history의 데이터는 유지하도록한다 -> 내가 얻은 점수내역을 보기 위함
		 * 3. user_conference의 데이터는 삭제한다
		 */
		
		conferenceService.UpdateConferenceMemberMinus(conference.getId());
		
		userConferenceService.deleteUserConference(user);
		
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@PostMapping("/join")
	@ApiOperation(value="방 입장", notes="참가자가 아닌경우 예약방과 진행방을 클릭할 시 모두 해당된다.")
	@ApiResponses({
		@ApiResponse(code=200, message="성공"),
	})
	public ResponseEntity<?> joinConference(@RequestBody UserConferencePostReq userConferenceInfo) {
		Conference conference = conferenceService.getConference(userConferenceInfo.getConferenceId());
		User user = userService.getUserById(userConferenceInfo.getUserId());
		//join할 시 수행되어야할 사항
		/*
		 * user_history에 데이터생성
		 * 
		 * conference / user input, 
		 * action is boolean ( false ? using what? )_
		 * 		-> input time 설정
		 * 		-> userYetScore 설정
		 */
		ConferenceHistory conferenceHistory = conferenceHistoryService.createUserConferenceHistory(user, conference);
		
		return ResponseEntity.status(200).body(conferenceHistory);
	}
	
	@PostMapping("/out")
	@ApiOperation(value="방 나가기", notes="")
	@ApiResponses({
		@ApiResponse(code=200, message="Success"),
	})
	public ResponseEntity<?> outConference(@RequestBody UserConferencePostReq userConferenceInfo) {
		
		/*
		 * user_history에 데이터수정
		 * 		-> out time 설정
		 * 		-> userScore 설정
		 * 		-> user의 userScore update
		 */
		/*
		 * 2가지방식이있다 join에서 넘겨받은 conferenceHistory의 id값을 넘겨주는것
		 */
		Conference conference = conferenceService.getConference(userConferenceInfo.getConferenceId());
		User user = userService.getUserById(userConferenceInfo.getUserId());
		ConferenceHistory conferenceHistory = conferenceHistoryService.getConferenceHistory(user, conference);
		int score = conferenceHistoryService.updateUserConferenceHistory(conferenceHistory.getId());
		userService.updateScore(user, score);
		
		User sendUser = userService.getUserById(userConferenceInfo.getUserId());
		ConferenceHistory sendHistory = conferenceHistoryService.getConferenceHistory(conferenceHistory.getId());
		return ResponseEntity.status(200).body(UserConferenceHistoryRes.of(sendUser, sendHistory));
	}
	
}
