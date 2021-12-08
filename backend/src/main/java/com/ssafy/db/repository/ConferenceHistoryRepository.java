package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceHistory;
import com.ssafy.db.entity.User;

@Repository
public interface ConferenceHistoryRepository extends JpaRepository<ConferenceHistory, Long> {
	Optional<ConferenceHistory> findById(Long id);
	Optional<ConferenceHistory> findByConferenceId(Long conference_id);
	
	ConferenceHistory findByUserIdAndConferenceId(Long user_id, Long conference_id);
	ConferenceHistory findByUserIdAndConferenceIdAndActionTrue(Long user_id, Long conference_id);
	
	List<ConferenceHistory> findByUserId(Long user_id);
	List<ConferenceHistory> findByUserId(Long user_id, Sort sort);
}
