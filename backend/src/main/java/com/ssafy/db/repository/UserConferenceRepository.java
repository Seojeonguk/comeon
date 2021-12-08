package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserConference;

@Repository
public interface UserConferenceRepository extends JpaRepository<UserConference, Long> {
	Optional<UserConference> findByConferenceId(Long id);

    void deleteByUser(User user);
    void deleteByConference(Conference conference);
}
