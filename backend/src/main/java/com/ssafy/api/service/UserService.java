package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User createUser(UserRegisterPostReq userRegisterInfo);
	User getUserById(Long id);
	User getUserByUserId(String userId);
	Optional updateUser(User user);
	void deleteUser(String userId);
	
	void updateScore(User user, int score);
	List<User> getUserScoreList();
}
