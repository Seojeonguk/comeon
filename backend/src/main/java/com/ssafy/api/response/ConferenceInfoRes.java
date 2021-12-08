package com.ssafy.api.response;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.querydsl.core.Tuple;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.QUser;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@ApiModel("ConferenceInfoResponse")
public class ConferenceInfoRes extends BaseResponseBody {
	@ApiModelProperty(name="방 정보")
	ConferenceRes conferenceRes;
	
	List<Map<String,String>> users;
	
	public static ConferenceInfoRes of(Integer statusCode, String message, ConferenceRes conference, List<Map<String,String>> users) {
		ConferenceInfoRes res = new ConferenceInfoRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setConferenceRes(conference);
		res.setUsers(users);
		return res;
	}
}
