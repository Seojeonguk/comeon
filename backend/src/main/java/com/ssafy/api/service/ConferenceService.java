package com.ssafy.api.service;

import java.text.ParseException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.querydsl.core.Tuple;
import com.ssafy.api.request.ConferencePostReq;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceCategory;
import com.ssafy.db.entity.User;

/**
 * 방 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface ConferenceService {
	List<Conference> getList(String title, String sort, Boolean is_active, Long conference_category, String sortType);
	Page<Conference> getPageList(String title, String sort, int page, int size, Long conference_category, String sortType);
	List<ConferenceCategory> getCategoryList(); // 카테고리 리스트 가져오기
	
	Conference createConference(ConferencePostReq conferenceInfo, MultipartFile file,User user) throws ParseException; // 방 생성
	Optional<Conference> ModifyConference(Long conference_id, ConferencePostReq conferenceInfo, MultipartFile file);
	void UpdateConferenceMemberPlus(Long id);
	void UpdateConferenceMemberMinus(Long id);
	void DeleteConference(Long id);
	
	Conference getConference(Long id); // 방 상세정보 조회
	
	Conference newConference(ConferencePostReq conferenceInfo) throws ParseException;
	ConferenceRes ConvertConference(Conference conference);
	
}
