package com.ssafy.api.request;

import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@ApiModel("ConferencePostRequest")
public class ConferencePostReq {
	@ApiModelProperty(name="방 카테고리 ID", example = "1")
	Long conferenceCategoryId;
	@ApiModelProperty(name="방 제목", example = "모각코")
	String title;
	@ApiModelProperty(name="방 설명", example = "모여서 각자 코딩하는 방!")
	String description;
	@ApiModelProperty(name="방 시작 시간", example = "HH:mm:ss")
	String callStartTime;
	@ApiModelProperty(name="방 종료 시간", example = "HH:mm:ss")
	String callEndTime;
	@ApiModelProperty(name="방 시작 날짜", example = "yyyy-MM-dd")
	String callStartDate;
	@ApiModelProperty(name="방 종료 날짜", example = "yyyy-MM-dd")
	String callEndDate;
	@ApiModelProperty(name="방 유지 시간", example = "2")
	int callSetTime;
	@ApiModelProperty(name="방 진행 요일", example = "월화수목 또는 배열 011010")
	String day;
	@ApiModelProperty(name="방 최대인원 수", example = "4")
	int maxMember;

}
