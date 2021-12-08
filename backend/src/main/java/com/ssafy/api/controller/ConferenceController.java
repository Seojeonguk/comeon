package com.ssafy.api.controller;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.api.request.ConferencePostReq;
import com.ssafy.api.request.UserConferencePostReq;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.api.service.ConferenceService;
import com.ssafy.api.service.UserConferenceService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Conference;
import com.ssafy.api.response.ConferenceInfoRes;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import springfox.documentation.annotations.ApiIgnore;

@Api(value = "방 API", tags = { "conference" })
@RestController
@RequestMapping("${ApiPrefix}/conferences")
public class ConferenceController {

	@Autowired
	ConferenceService conferenceService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserConferenceService userConferenceService;

	@PostMapping()
	@ApiOperation(value = "방 생성", notes = "카테고리ID, 제목, 설명을 통해 방 생성")
	@ApiResponses({ @ApiResponse(code = 201, message = "성공", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<? extends BaseResponseBody> CreateConference(
			@ApiParam(value = "방 생성 정보", required = true) 
			ConferencePostReq conferenceInfo,
			@ApiParam(value = "방 썸네일") MultipartFile file,
			@ApiIgnore Authentication authentication) throws ParseException {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();

		User user = userService.getUserByUserId(userId);
		
//		System.out.println(conferenceInfo.getConferenceCategoryId());
//		System.out.println(conferenceInfo.getTitle());
//		System.out.println(conferenceInfo.getDescription());
//		System.out.println(conferenceInfo.getCallStartDate());
//		System.out.println(conferenceInfo.getCallEndDate());
//		System.out.println(conferenceInfo.getCallStartTime());
//		System.out.println(conferenceInfo.getCallEndTime());		
//		System.out.println(conferenceInfo.getDay());
		
		Conference create_Conference_Info = conferenceService.createConference(conferenceInfo, file, user);
		
		// 방 생성시 UserConference로 유저와 방 연결되있음을 명시
		userConferenceService.createUserConference(user, create_Conference_Info);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@PatchMapping("{conference_id}")
	@ApiOperation(value="방 정보 수정", notes="방에 대한 정보를 수정한다.")
	@ApiResponses({
		@ApiResponse(code=200, message="성공"),
		@ApiResponse(code=500, message="서버오류")
	})
	public ResponseEntity<? extends BaseResponseBody> ModifyConference(@PathVariable Long conference_id, ConferencePostReq conferenceInfo,
			@ApiParam(value = "방 썸네일") MultipartFile file) {
		
		conferenceService.ModifyConference(conference_id, conferenceInfo, file);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	// 방 삭제
	@DeleteMapping("{conference_id}")
	@ApiOperation(value="방 삭제", notes="방 삭제")
	@ApiResponses({
		@ApiResponse(code = 201,message = "성공", response = BaseResponseBody.class),
		@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
	})
	public ResponseEntity<?> DeleteConference(@PathVariable Long conference_id) {
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@GetMapping("{conference_id}")
	@ApiOperation(value="방 정보 가져오기", notes="제목, 정렬, 페이지, 개수, 카테고리를 통해 검색")
	@ApiResponses({
		@ApiResponse(code = 200,message = "성공", response = BaseResponseBody.class),
		@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
	})
	public ResponseEntity<?> getConference(@PathVariable Long conference_id) {
		Conference conference = conferenceService.getConference(conference_id);
		ConferenceRes conferenceRes = conferenceService.ConvertConference(conference);
		return ResponseEntity.status(200).body(conferenceRes);
	}
	
	@GetMapping()
	@ApiOperation(value="방 목록", notes="제목, 정렬, 페이지, 개수, 카테고리를 통해 검색")
	@ApiResponses({
		@ApiResponse(code = 201,message = "성공", response = BaseResponseBody.class),
		@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
	})
	public ResponseEntity<?> ListConference(
			@RequestParam(required = false, value="title") String title,
			@RequestParam(required = false, value="sort") String sort,
			@RequestParam(required = false, value="is_active") Boolean is_active,
//			@RequestParam(required = false, value="") String value,
			@RequestParam(required = false, defaultValue="-1", value="conference_category") Long conference_category,
			@RequestParam(required = false, defaultValue="-1", value="page") int page,
			@RequestParam(required = false, defaultValue="-1", value="size") int size,
			@RequestParam(required = false, value="asc") String asc,
			@RequestParam(required = false, value="desc") String desc){
		
		System.out.println(title+" "+sort+" "+page+" "+size+" "+conference_category);
		System.out.println(asc+" "+desc);
		String sortType = null;
		if (asc != null) sortType = "ASC";
		if (desc != null) sortType = "DESC";
		
		if (page == -1 || size == -1) {
			List<Conference> list = conferenceService.getList(title, sort, is_active, conference_category, sortType);
			List<ConferenceRes> reslist = new ArrayList<>();
			for(Conference item : list) {
				reslist.add(conferenceService.ConvertConference(item));
			}
			return ResponseEntity.status(201).body(reslist);
		} else {
			Page<Conference> Pagelist = conferenceService.getPageList(title, sort, page, size, conference_category, sortType);
//			for(Conference item : Pagelist) {
//				reslist.add(conferenceService.ConvertConference(item));
//			}
			return ResponseEntity.status(201).body(Pagelist);
		}
//		System.out.println(conferenceList);
//		if (conferenceList != null)
//			return ResponseEntity.status(201).body(ConferenceListRes.of(201, "Success", conferenceList));
//		else
//			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Failed to Get Conference List"));
	}
}
