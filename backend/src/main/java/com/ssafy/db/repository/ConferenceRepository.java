package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Conference;

@Repository
public interface ConferenceRepository extends PagingAndSortingRepository<Conference, Long>, JpaRepository<Conference, Long> {
	List<Conference> findAll();
	List<Conference> findAll(Sort sort);
	Page<Conference> findAll(Pageable pageable);
	
	List<Conference> findByIsActiveTrue();
	List<Conference> findByIsActiveTrue(Sort sort);
	List<Conference> findByIsActiveFalse();
	List<Conference> findByIsActiveFalse(Sort sort);
	
	List<Conference> findByTitleLike(String title);
	List<Conference> findByTitleLike(String title, Sort sort);
	Page<Conference> findByTitleLike(String title, Pageable pageable);
	
	List<Conference> findByIsActiveTrueAndTitleLike(String title);
	List<Conference> findByIsActiveTrueAndTitleLike(String title, Sort sort);
	Page<Conference> findByIsActiveTrueAndTitleLike(String title, Pageable pageable);
	List<Conference> findByIsActiveFalseAndTitleLike(String title);
	List<Conference> findByIsActiveFalseAndTitleLike(String title, Sort sort);
	Page<Conference> findByIsActiveFalseAndTitleLike(String title, Pageable pageable);
	
	List<Conference> findByConferenceCategory(Long conferenceCategory);
	List<Conference> findByConferenceCategoryAndIsActiveTrue(Long conferenceCategory);
	List<Conference> findByConferenceCategoryAndIsActiveFalse(Long conferenceCategory);
	List<Conference> findByConferenceCategory(Long conferenceCategory, Sort sort);
	List<Conference> findByConferenceCategoryAndIsActiveTrue(Long conferenceCategory, Sort sort);
	List<Conference> findByConferenceCategoryAndIsActiveFalse(Long conferenceCategory, Sort sort);
	Page<Conference> findByConferenceCategory(Long conferenceCategory, Pageable pageable);
	Page<Conference> findByConferenceCategoryAndIsActiveTrue(Long conferenceCategory, Pageable pageable);
	Page<Conference> findByConferenceCategoryAndIsActiveFalse(Long conferenceCategory, Pageable pageable);
	
	List<Conference> findByTitleLikeAndConferenceCategory(String title, Long conferenceCategory);
	List<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveTrue(String title, Long conferenceCategory);
	List<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveFalse(String title, Long conferenceCategory);
	List<Conference> findByTitleLikeAndConferenceCategory(String title, Long conferenceCategory, Sort sort);
	List<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveTrue(String title, Long conferenceCategory, Sort sort);
	List<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveFalse(String title, Long conferenceCategory, Sort sort);
	Page<Conference> findByTitleLikeAndConferenceCategory(String title, Long conferenceCategory, Pageable pageable);
	Page<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveTrue(String title, Long conferenceCategory, Pageable pageable);
	Page<Conference> findByTitleLikeAndConferenceCategoryAndIsActiveFalse(String title, Long conferenceCategory, Pageable pageable);
	
	Optional<Conference> findById(Long Id);
}
//	List<Conference> findByCallStartTime
//	Optional<Conference> findByOwnerId(int ownerId);
