package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.DynamicInsert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	UserRepositorySupport userRepositorySupport;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
//		System.out.println(userRegisterInfo.getUserid());
//		System.out.println(userRegisterInfo.getDepartment());
//		System.out.println(userRegisterInfo.getPosition());
//		System.out.println(userRegisterInfo.getName());
		user.setUserId(userRegisterInfo.getUserid());
		user.setDepartment(userRegisterInfo.getDepartment());
		user.setPosition(userRegisterInfo.getPosition());
		user.setName(userRegisterInfo.getName());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		return userRepository.save(user);
	}
	@Override
	public User getUserById(Long id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent())
			return user.get();
		return null;
	}
	
	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		// 추가부분  //
		// 본래코드로 할 시 존재하지 않는 아이디로 로그인 시 서버 에러 발생
//		Optional<User> user = userRepositorySupport.findUserByUserId(userId);
		Optional<User> user = userRepository.findByUserId(userId);
		if(user.isPresent()) {
			return user.get();
		}
		return null;
		
//		if(option.isPresent()) {
//			User db_info = option.get();
//			user = new User();
//			user.setDepartment(db_info.getDepartment());
//			user.setPosition(db_info.getPosition());
//			user.setName(db_info.getName());
//			user.setUserId(db_info.getUserId());
//			user.setPassword(db_info.getPassword());
//		}
		// 여기까지 //
		// 본래 코드 //
		//				User user = userRepositorySupport.findUserByUserId(userId).get();
		// 여기까지 //

	}

	@Override
	public Optional<User> updateUser(User user) {
//		System.out.println(user);
		Optional<User> option = userRepository.findByUserId(user.getUserId());
		
		option.ifPresent(findUser -> {
			findUser.setName(user.getName());
			findUser.setPosition(user.getPosition());
			findUser.setDepartment(user.getDepartment());
			userRepository.save(findUser);
		});
		
		return option;
	}

	@Override
	public void deleteUser(String userId) {
		Optional<User> option = userRepositorySupport.findUserByUserId(userId);
		
		option.ifPresent(findUser -> {
			userRepository.delete(findUser);
		});
	}

	//////////////////////////////////////////////////////////////////////////////
	
	@Override
	public void updateScore(User user, int score) {
		Optional<User> option = userRepository.findByUserId(user.getUserId());
		option.ifPresent(findUser -> {
			findUser.setUserScore(score);
			String tier = "vvip";
//			int tierscore = score/3600;
			int tierscore = score/5;
			if (tierscore >= 50 && tierscore < 100) tier = "vip";
			else if (tierscore >= 10 && tierscore < 50) tier = "gold";
			else if (tierscore >= 5 && tierscore < 10) tier = "silver";
			else if (tierscore >= 1 && tierscore < 5) tier = "white";
			else tier = "normal";
			findUser.setUserTier(tier);
			userRepository.save(findUser);
		});
	}

	@Override
	public List<User> getUserScoreList() {
		return userRepository.findAll(Sort.by("userScore").descending());
	}

}
