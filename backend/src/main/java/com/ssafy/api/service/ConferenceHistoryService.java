package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;

public interface ConferenceHistoryService {
	ConferenceHistory createUserConferenceHistory(User user, Conference conference);
	List<ConferenceHistory> getConferenceHistoryList(User user);
	ConferenceHistory getConferenceHistory(User user, Conference conference);
	ConferenceHistory getConferenceHistory(Long id);
	int updateUserConferenceHistory(Long id);
}
