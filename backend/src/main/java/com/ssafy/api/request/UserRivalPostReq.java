package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserRivalPostRequset")
public class UserRivalPostReq {
	@ApiModelProperty(name="유저 ID", example="your id")
	String userId;
	@ApiModelProperty(name="유저 라이벌 ID", example="your Rival id")
	String userRivalId;
	
}
