package com.ssafy.api.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.ConferenceInfoRes;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.api.service.ConferenceHistoryService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "유저 방 히스토리 API", tags = {"user", "history"})
@RestController
@RequestMapping("${ApiPrefix}/history")
public class ConferenceHistoryController {
	@Autowired
	UserService userService;
	
	@Autowired	
	ConferenceHistoryService conferenceHistoryService;
	
	@GetMapping("/{user_id}")
	@ApiOperation(value="유저 방 지난이력 정보 조회", notes="유저가 방에 참가 했던 이력 및 이력에서 비롯된 점수내역을 반환한다.")
	@ApiResponses({
		@ApiResponse(code=200,message="성공")
	})
	public ResponseEntity<?> getConferenceHistoryList(@PathVariable Long user_id) {
		User user = userService.getUserById(user_id);
		List<ConferenceHistory>list = conferenceHistoryService.getConferenceHistoryList(user);
		return ResponseEntity.status(200).body(list);
	}
}
