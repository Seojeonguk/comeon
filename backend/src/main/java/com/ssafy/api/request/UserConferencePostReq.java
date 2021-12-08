package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserConferencePostRequset")
public class UserConferencePostReq {
	@ApiModelProperty(name="방 고유 ID", example="25")
	Long conferenceId;
	@ApiModelProperty(name="유저 고유 ID", example="1")
	Long userId;
}
