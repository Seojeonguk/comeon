package com.ssafy.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.ConferenceCategory;

@Repository
public interface ConferenceCategoryRepository extends JpaRepository<ConferenceCategory, Long> {
	List<ConferenceCategory> findAll();
}
