package com.ssafy.api.response;

import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserConferenceHistoryResponse")
public class UserConferenceHistoryRes {
	@ApiModelProperty(name="유저 정보")
	User user;
	@ApiModelProperty(name="유저 최근 지난회의이력 정보")
	ConferenceHistory conferenceHistory;
	
	public static UserConferenceHistoryRes of(User user, ConferenceHistory conferenceHistory) {
		UserConferenceHistoryRes res = new UserConferenceHistoryRes();
		res.setUser(user);
		res.setConferenceHistory(conferenceHistory);
		return res;
	}
	
}
