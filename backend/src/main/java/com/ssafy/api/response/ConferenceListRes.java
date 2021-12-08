package com.ssafy.api.response;

import java.util.List;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Conference;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@ApiModel("UserConferenceListResponse")
public class ConferenceListRes extends BaseResponseBody {
	List<ConferenceRes> conferences;
	public static ConferenceListRes of(Integer statusCode, String message, List<ConferenceRes>conference) {
		ConferenceListRes res = new ConferenceListRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setConferences(conference);
		return res;
	}
}
