package com.ssafy.api.response;

import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("CreateConferenceResponseEntity")
public class ConferenceRes {
	@ApiModelProperty(name="방 고유번호 ID", example="1")
	Long Id;
	@ApiModelProperty(name="방 생성 유저 ID", example="1")
	Long ownerId;
	@ApiModelProperty(name="방 카테고리 ID", example = "1")
	Long conferenceCategoryId;
	@ApiModelProperty(name="방 제목", example = "모각코")
	String title;
	@ApiModelProperty(name="방 설명", example = "모여서 각자 코딩하는 방!")
	String description;
	@ApiModelProperty(name="방 표지", example = "image.png")
	String thumbnailUrl;
	@ApiModelProperty(name="방 시작 시간", example = "HH:mm")
	String callStartTime;
	@ApiModelProperty(name="방 종료 시간", example = "HH:mm")
	String callEndTime;
	@ApiModelProperty(name="방 시작 날짜", example = "yyyy-MM-dd")
	String callStartDate;
	@ApiModelProperty(name="방 종료 날짜", example = "yyyy-MM-dd")
	String callEndDate;
	@ApiModelProperty(name="방 유지 시간", example = "2")
	int callSetTime;
	@ApiModelProperty(name="방 진행 요일", example = "월화수목 또는 배열 011010")
	String selectedDays;
	@ApiModelProperty(name="방 최대인원 수", example = "4")
	int maxMember;
	@ApiModelProperty(name="방 현재인원 수", example = "1")
	int nowMember;
	@ApiModelProperty(name="방 진행 여부", example = "false")
	boolean isActive;
}

