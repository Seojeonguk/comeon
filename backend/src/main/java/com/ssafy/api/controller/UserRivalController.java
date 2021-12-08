package com.ssafy.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserRivalPostReq;
import com.ssafy.api.response.UserRes;
import com.ssafy.api.service.UserRivalService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserRival;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "유저 라이벌 API", tags = {"UserRival"})
@RestController
@RequestMapping("/api/v1/Rivals")
public class UserRivalController {
	
	@Autowired
	UserService userService;
	@Autowired
	UserRivalService userRivalService;
	
	@PostMapping()
	@ApiOperation(value = "라이벌 생성", notes="유저와 라이벌유저의 구도를 생성한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<? extends BaseResponseBody> createRival(@RequestBody UserRivalPostReq userRivalPostReq) {
		User user = userService.getUserByUserId(userRivalPostReq.getUserId());
		User rival = userService.getUserByUserId(userRivalPostReq.getUserRivalId());
		UserRival Rival = userRivalService.createRival(user.getId(), rival.getId());
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@PostMapping("/me")
	@ApiOperation(value = "내 라이벌 검색", notes="내 라이벌들의 리스트를 검색한다")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<List<User>> getRivalList(@RequestBody UserRivalPostReq userRivalPostReq) {
		User user = userService.getUserByUserId(userRivalPostReq.getUserId());
		List<User> userRivalList = userRivalService.getRivalList(user.getId());
		return ResponseEntity.status(200).body(userRivalList);
	}
	
	@GetMapping("/{userRivalId}")
	@ApiOperation(value = "라이벌유저 검색", notes="라이벌 설정할 유저의 정보를 가져온다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<User> getRival(@PathVariable String userRivalId) {
		User rival = userService.getUserByUserId(userRivalId);
		return ResponseEntity.status(200).body(rival);
//		return ResponseEntity.status(200).body(userRivalService.getRival(rival.getId()));
	}
	
	@PatchMapping("/{userId}/{userRivalId}")
	@ApiOperation(value = "라이벌관계 형성", notes="유저와 라이벌유저의 라이벌관계를 성립한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<? extends BaseResponseBody> updateRivalActive(@PathVariable String userId, @PathVariable String userRivalId) {
		User user = userService.getUserByUserId(userId);
		User rival = userService.getUserByUserId(userRivalId);
		userRivalService.updateRival(user.getId(), rival.getId());
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@DeleteMapping("/{userId}/{userRivalId}")
	@ApiOperation(value = "라이벌관계 삭제", notes="유저와 라이벌유저의 라이벌관계를 삭제한다")
	@ApiResponses({
		@ApiResponse(code = 200, message = "Success"),
	})
	public ResponseEntity<? extends BaseResponseBody> deleteRival(@PathVariable String userId, @PathVariable String userRivalId) {
		User user = userService.getUserByUserId(userId);
		User rival = userService.getUserByUserId(userRivalId);
		userRivalService.deleteRival(user.getId(), rival.getId());
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
//	@DeleteMapping("/{userId}")
//	@ApiOperation(value = "유저 삭제", notes="유저 삭제에 따른 라이벌관계를 삭제한다")
//	@ApiResponses({
//		@ApiResponse(code = 200, message = "Success"),
//	})
//	public ResponseEntity<? extends BaseResponseBody> deleteUserRelation(@PathVariable String userId, @PathVariable String userRivalId) {
//		userRivalService.deleteRelation(userId);
//		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
//	}
}
