package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.QConference;
import com.ssafy.db.entity.QUser;
import com.ssafy.db.entity.QUserConference;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserConference;

@Repository
public class UserConferenceRepositorySupport {
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
	QUserConference qUserConference = QUserConference.userConference;
	QUser qUser = QUser.user;
	QConference qConference = QConference.conference;
	
	public Optional<UserConference> findById(Long id) {
		UserConference user_conference = jpaQueryFactory.select(qUserConference).from(qUserConference)
				.where(qUserConference.id.eq(id)).fetchOne();
		if (user_conference == null) return Optional.empty();
		return Optional.ofNullable(user_conference);
	}
	public List<Conference> findByUserId(Long id) {
		List<Conference> conferences = jpaQueryFactory.select(qConference).from(qConference).join(qUserConference).on(qConference.id.eq(qUserConference.conference.id)).where(qUserConference.user.id.eq(id)).fetch();
		return conferences;
	}
	public Optional<List<Tuple>> findByConferenceId(Long id) {		
//		List<User> users = jpaQueryFactory.select(qUser).from(qUser).join(qUserConference).on(qUser.id.eq(qUserConference.user.id)).fetch();
		List<Tuple> users = jpaQueryFactory.select(qUser.id, qUser.name, qUser.userId).from(qUser).join(qUserConference).on(qUser.id.eq(qUserConference.user.id)).where(qUserConference.conference.id.eq(id)).fetch();
		if (users == null) return Optional.empty();
		return Optional.ofNullable(users);
	}
}
