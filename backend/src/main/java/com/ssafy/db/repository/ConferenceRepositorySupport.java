package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.QConference;

@Repository
public class ConferenceRepositorySupport{
	 @Autowired
	 private JPAQueryFactory jpaQueryFactory;
	 QConference qConference = QConference.conference;
	 
//	 List<Conference> findByTitle(String title) {
//		 List<Conference> conference = jpaQueryFactory.select(qConference).from(qConference)
//				 .where(qConference.t)
//	 }
	 
	 Optional<Conference> findByConferenceId(Long ownerId) {
		 Conference conference = jpaQueryFactory.select(qConference).from(qConference)
				 .where(qConference.ownerId.eq(ownerId)).fetchOne();
		 if (conference == null) return Optional.empty();
		 return Optional.ofNullable(conference);
	 }
	 
}
