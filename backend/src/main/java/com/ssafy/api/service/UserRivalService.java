package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserRival;

public interface UserRivalService {
	UserRival createRival(Long user_id, Long Rival_id);
	Optional<User> getRival(Long Rival_id);
	List<User> getRivalList(Long user_id);
	void updateRival(Long user_id, Long Rival_id);
	void deleteRival(Long user_id, Long Rival_id);
	void deleteRelation(Long id);
}
