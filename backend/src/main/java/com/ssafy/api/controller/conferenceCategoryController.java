package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.conferencecategoryRes;
import com.ssafy.api.service.ConferenceService;
import com.ssafy.db.entity.ConferenceCategory;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "방 카테고리 API", tags = {"conferenceCategory"})
@RestController
@RequestMapping("${ApiPrefix}/conference-categories")
public class conferenceCategoryController {
	
	@Autowired
	ConferenceService conferenceService;
	
	@GetMapping()
	@ApiOperation(value="방 카테고리 조회", notes="카테고리 목록 조회")
	@ApiResponses({
		@ApiResponse(code=200,message="성공",response=conferencecategoryRes.class)
	})
	public ResponseEntity<conferencecategoryRes> getCategoryList() {
		List<ConferenceCategory> categoryList = conferenceService.getCategoryList();
		return ResponseEntity.ok(conferencecategoryRes.of(200,"Success",categoryList));
	}
}
