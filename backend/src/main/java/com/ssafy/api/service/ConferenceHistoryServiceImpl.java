package com.ssafy.api.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.ConferenceHistoryRepository;

@Service("ConferenceHistoryService")
public class ConferenceHistoryServiceImpl implements ConferenceHistoryService {
	@Autowired
	ConferenceHistoryRepository conferenceHistoryRepository;
	
	@Override
	public ConferenceHistory createUserConferenceHistory(User user, Conference conference) {
		ConferenceHistory conferenceHistory = new ConferenceHistory();
		conferenceHistory.setUser(user);
		conferenceHistory.setConference(conference);
		conferenceHistory.setAction(true);
		conferenceHistory.setInsertTime(new Date());
		conferenceHistory.setUserYetScore(user.getUserScore());
		return conferenceHistoryRepository.save(conferenceHistory);
	}

	@Override
	public int updateUserConferenceHistory(Long id) {
		Optional<ConferenceHistory> option = conferenceHistoryRepository.findById(id);

		option.ifPresent(findHistory -> {
			int score = 0;
			SimpleDateFormat time = new SimpleDateFormat("HH:mm:ss");
			
			Date start = findHistory.getInsertTime();
			Date end = new Date();
			findHistory.setOutTime(end);
			Long during = end.getTime() - start.getTime();
			score = (int) (during/1000); // 초
//			score = (int) (during/10000); // 10초
//			score = (int) (during/60000); // 분
			findHistory.setUserScore(score);
			findHistory.setAction(false);
			conferenceHistoryRepository.save(findHistory);
		});
		
		Optional<ConferenceHistory> option2 = conferenceHistoryRepository.findById(id);
		if(option2.isPresent()) {
			return option2.get().getUserScore()+option2.get().getUserYetScore();
		}
		return 0;
	}
	
	/////////////////////////////////////////////////////////////////////////
	

	@Override
	public List<ConferenceHistory> getConferenceHistoryList(User user) {
//		return conferenceHistoryRepository.findByUserId(user.getId());
		return conferenceHistoryRepository.findByUserId(user.getId(), Sort.by("id").descending());
	}

	@Override
	public ConferenceHistory getConferenceHistory(User user, Conference conference) {
		return conferenceHistoryRepository.findByUserIdAndConferenceIdAndActionTrue(user.getId(), conference.getId());
	}

	@Override
	public ConferenceHistory getConferenceHistory(Long id) {
		return conferenceHistoryRepository.findById(id).get();
	}

	
}
