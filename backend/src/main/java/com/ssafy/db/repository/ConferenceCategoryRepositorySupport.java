package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.ConferenceCategory;
import com.ssafy.db.entity.QConferenceCategory;

@Repository
public class ConferenceCategoryRepositorySupport {
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
	QConferenceCategory qConference_Category = QConferenceCategory.conferenceCategory;
	
	Optional<ConferenceCategory> findById(Long id) {
		ConferenceCategory conference_Category = jpaQueryFactory.select(qConference_Category).from(qConference_Category)
				.where(qConference_Category.id.eq(id)).fetchOne();
		if (conference_Category == null) return Optional.empty();
		return Optional.ofNullable(conference_Category);
	}
	
}
