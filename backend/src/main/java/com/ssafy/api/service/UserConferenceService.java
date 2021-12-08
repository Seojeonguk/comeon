package com.ssafy.api.service;

import java.util.List;
import java.util.Map;

import com.ssafy.api.response.ConferenceRes;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserConference;

public interface UserConferenceService {
	UserConference createUserConference(User user, Conference conference);
	void deleteUserConference(User user);
	void deleteUserConference(Conference conference);
	
	List<Map<String,String>> getUsers(Long id);
	List<Conference> getConferences(Long id);
}
