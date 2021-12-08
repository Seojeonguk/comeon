package com.ssafy.db.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Conference extends BaseEntity {
//	@ManyToOne(fetch = FetchType.LAZY)
//	private ConferenceCategory conferenceCategory;
	
	Long ownerId;
	Long conferenceCategory;
	Date callStartTime;
	Date callEndTime;
	Date callStartDate;
	Date callEndDate;
	int callSetTime;
	int maxMember;
	int nowMember;
	int day;
	String thumbnailUrl;
	String title;
	String description;
	boolean isActive;
}
