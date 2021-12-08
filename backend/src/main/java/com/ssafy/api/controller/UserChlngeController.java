package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.UserRes;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import springfox.documentation.annotations.ApiIgnore;

@Api(value = "유저 챌린지 API", tags = {"UserChlnge"})
@RestController
@RequestMapping("/api/v1/chlnges")
public class UserChlngeController {
	@Autowired
	UserService userService;
	
	@GetMapping("/me")
	@ApiOperation(value = "유저 점수, 티어 검색", notes="유저의 전체정보를 통해 유저의 점수와 티어를 검색한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<UserRes> getUser(@ApiIgnore Authentication authentication) {
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		String userId = userDetails.getUsername();
		User user = userService.getUserByUserId(userId);
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
	
	@PatchMapping()
	@ApiOperation(value = "유저 점수, 티어 업데이트", notes="유저의 증감되는 점수와, 그에따른 티어변동 내용을 변경한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<? extends BaseResponseBody> UpdateScore(@RequestBody User user) {
		/*
		 * 
		 */
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	//사람 전체랭킹을 조회하는 API
	@GetMapping("/scores")
	@ApiOperation(value = "유저 전체 랭킹", notes="전체유저의 점수 리스트를 상위부터 반환한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<?> ListWholeScore() {
		return ResponseEntity.status(200).body(userService.getUserScoreList());
	}
}
