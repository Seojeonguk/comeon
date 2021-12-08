package com.ssafy.api.response;

import java.util.List;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.ConferenceCategory;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("conferenceCategoryResponse")
public class conferencecategoryRes extends BaseResponseBody {
	@ApiModelProperty(name="방 목록 카테고리 리스트")
	List<ConferenceCategory> CategoryList;
	
	public static conferencecategoryRes of(Integer statusCode, String message, List<ConferenceCategory> categoryList) {
		conferencecategoryRes res = new conferencecategoryRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setCategoryList(categoryList);
		return res;
	}
}
