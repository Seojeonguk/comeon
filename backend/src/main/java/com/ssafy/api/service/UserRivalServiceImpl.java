package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserRival;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRivalRepository;
import com.ssafy.db.repository.UserRivalRepositorySupport;

@Service("userRivalService")
public class UserRivalServiceImpl implements UserRivalService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserRivalRepository userRivalRepository;
	
	@Autowired
	UserRivalRepositorySupport userRivalRepositorySupport;

	@Override
	public UserRival createRival(Long user_id, Long rival_id) {
		// TODO Auto-generated method stub
		UserRival Rival = new UserRival();
		Rival.setUserId(user_id);
		Rival.setUserRivalId(rival_id);
		return userRivalRepository.save(Rival);
	}

	@Override
	public List<User> getRivalList(Long user_id) {
		List<UserRival> Rivallist = userRivalRepository.findByUserId(user_id);
		List<User> userlist = new ArrayList<User>();
		
		for(UserRival item : Rivallist) {
			Optional<User> user = userRepository.findById(item.getUserRivalId()); 
			if (user.isPresent()) {
				userlist.add(user.get());
			}
		}
		return userlist;
	}

	@Override
	public Optional<User> getRival(Long user_id) {
		// join query만들기
		return null;
	}


	@Override
	public void updateRival(Long user_id, Long rival_id) {
		Optional<UserRival> option = userRivalRepository.findByUserIdAndUserRivalId(user_id, rival_id);
		option.ifPresent(findRival -> {
			findRival.setActive(true);
			userRivalRepository.save(findRival);
		});
	}

	@Override
	public void deleteRival(Long user_id, Long rival_id) {
		Optional<UserRival> option = userRivalRepository.findByUserIdAndUserRivalId(user_id, rival_id);
		option.ifPresent(findRival -> {
			userRivalRepository.delete(findRival);
		});
	}

	@Override
	public void deleteRelation(Long id) {
		Long user = userRivalRepository.deleteByUserId(id);
		Long Rival = userRivalRepository.deleteByUserRivalId(id);
	}

}
