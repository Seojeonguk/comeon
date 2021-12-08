package com.ssafy.api.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.querydsl.core.Tuple;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.QUser;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserConference;
import com.ssafy.db.repository.UserConferenceRepository;
import com.ssafy.db.repository.UserConferenceRepositorySupport;

@Service("UserConferenceService")
public class UserConferenceServiceImpl implements UserConferenceService {
	@Autowired
	ConferenceService conferenceService;
	
	@Autowired
	UserConferenceRepository userConferenceRepository;
	
	@Autowired
	UserConferenceRepositorySupport userConferenceRepositorySupport;

	@Override
	public UserConference createUserConference(User user, Conference conference) {
		UserConference userconference = new UserConference();
		userconference.setUser(user);
		userconference.setConference(conference);
		return userConferenceRepository.save(userconference);
	}
	
	@Override
	@Transactional
	public void deleteUserConference(User user) {
		userConferenceRepository.deleteByUser(user);
	}

	@Override
	@Transactional
	public void deleteUserConference(Conference conference) {
		userConferenceRepository.deleteByConference(conference);
	}
	

	/**
	 * id에 해당하는 방에 대한 사용자 정보 가져오기
	 * password까지 모두 값을 가져와서 Tuple의 형태로 사용자 아이디와 이름만 가져옴
	 * 반환 형태는 키,값의 형태여야 하기 때문에 Tuple을 Map형태로 변환하여 이를 반환
	 */
	@Override
	public List<Map<String, String>> getUsers(Long id) {
		
		List<Tuple> usersList = userConferenceRepositorySupport.findByConferenceId(id).get();

		List<Map<String, String>> users = new ArrayList<Map<String, String>>();
		for (Tuple user : usersList) {
			Map<String, String> map = new HashMap<String, String>();
			map.put("user_id", user.get(QUser.user.userId));
			map.put("name", user.get(QUser.user.name));
			users.add(map);
		}

		return users;
	}

	@Override
	public List<Conference> getConferences(Long id) {
		List<Conference> conferenceList = userConferenceRepositorySupport.findByUserId(id);
		return conferenceList;
	}
}
