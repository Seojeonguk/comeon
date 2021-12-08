package com.ssafy.db.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ConferenceHistory extends BaseEntity {
	@ManyToOne
	@JoinColumn(name = "conference_id")
	Conference conference;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	User user;
	
	boolean action;
	Date insertTime;
	Date outTime;
	
	int userScore;
	int userYetScore;
}
