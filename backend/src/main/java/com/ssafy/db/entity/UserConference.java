package com.ssafy.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserConference extends BaseEntity {
	
	@ManyToOne(fetch = FetchType.LAZY)
	Conference conference;

	@ManyToOne(fetch = FetchType.LAZY)
	User user;
}
