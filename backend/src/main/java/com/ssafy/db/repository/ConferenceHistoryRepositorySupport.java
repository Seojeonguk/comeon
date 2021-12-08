package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.QConferenceHistory;
import com.ssafy.db.entity.User;

@Repository
public class ConferenceHistoryRepositorySupport {
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
	QConferenceHistory qConference_history = QConferenceHistory.conferenceHistory;
	Optional<ConferenceHistory> findById(Long id) {
		ConferenceHistory conference_history = jpaQueryFactory.select(qConference_history).from(qConference_history)
				.where(qConference_history.id.eq(id)).fetchOne();
		if (conference_history == null) return Optional.empty();
		return Optional.ofNullable(conference_history);
	}
//	Optional<ConferenceHistory> findByUserId(User userId) {
//		ConferenceHistory conference_history = jpaQueryFactory.select(qConference_history).from(qConference_history)
//				.where(qConference_history.userId.eq(userId)).fetchOne();
//		if (conference_history == null) return Optional.empty();
//		return Optional.ofNullable(conference_history);
//	}
//	Optional<ConferenceHistory> findByConferenceId(Conference conferenceId) {
//		ConferenceHistory conference_history = jpaQueryFactory.select(qConference_history).from(qConference_history)
//				.where(qConference_history.conferenceId.eq(conferenceId)).fetchOne();
//		if (conference_history == null) return Optional.empty();
//		return Optional.ofNullable(conference_history);
//	}
}
