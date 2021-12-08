package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.UserRival;

@Repository
public interface UserRivalRepository extends JpaRepository<UserRival, Long>{
	List<UserRival> findByUserId(Long userId);
	Optional<UserRival> findByUserIdAndUserRivalId(Long userId, Long userRivalId);
	Long deleteByUserId(Long userId);
	Long deleteByUserRivalId(Long userRivalId);
}