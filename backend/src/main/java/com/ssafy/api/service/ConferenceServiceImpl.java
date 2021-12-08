package com.ssafy.api.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.checkerframework.framework.qual.Covariant;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.querydsl.core.Tuple;
import com.ssafy.api.request.ConferencePostReq;
import com.ssafy.api.response.ConferenceRes;
import com.ssafy.common.util.FileUtil;
import com.ssafy.db.entity.Conference;
import com.ssafy.db.entity.ConferenceCategory;
import com.ssafy.db.entity.QUser;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.ConferenceCategoryRepository;
import com.ssafy.db.repository.ConferenceRepository;
import com.ssafy.db.repository.ConferenceRepositorySupport;
import com.ssafy.db.repository.UserConferenceRepositorySupport;

@Service("conferenceService")
public class ConferenceServiceImpl implements ConferenceService {
	
	@Autowired
	ConferenceRepository conferenceRepository;

	@Autowired
	ConferenceRepositorySupport confeneceRepositrySupport;

	@Autowired
	ConferenceCategoryRepository categoryRepository;

	@Autowired
	UserConferenceRepositorySupport userConferenceRepositorySupport;

	/**
	 * 방 생성
	 * DB에서 default 값을 주어도 설정이 먹지 않아서 전부 세팅 필요..
	 * FileUtil의 FileSave함수를 통해 업로드 파일을 저장하며, 업로드된 파일의 이름(절대경로 + 업로드파일 이름) 반환
	 * @throws ParseException 
	 *  
	 */
	@SuppressWarnings("deprecation")
	@Override
	public Conference newConference(ConferencePostReq conferenceInfo) throws ParseException {
		Conference conference = new Conference();
		conference.setConferenceCategory(conferenceInfo.getConferenceCategoryId());
		conference.setTitle(conferenceInfo.getTitle());
		conference.setDescription(conferenceInfo.getDescription());
		
		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat time = new SimpleDateFormat("HH:mm");
		
		Date callstartdate = date.parse(conferenceInfo.getCallStartDate());
		Date callenddate = date.parse(conferenceInfo.getCallEndDate());
		conference.setCallStartDate(callstartdate);
		conference.setCallEndDate(callenddate);
		
		Date callstarttime = time.parse(conferenceInfo.getCallStartTime());
		Date callendtime = time.parse(conferenceInfo.getCallEndTime());
		conference.setCallStartTime(callstarttime);
		conference.setCallEndTime(callendtime);
		
		long diff = callendtime.getTime()-callstarttime.getTime();
		conference.setCallSetTime((int) (diff/1000));
	
		//day 설정
		JSONObject selectday = new JSONObject(conferenceInfo.getDay());
		JSONArray selectdayArray = selectday.getJSONArray("_rawValue");
		int day = 0;
		for(int i=0;i<selectdayArray.length();i++) {
			System.out.println(selectdayArray.get(i));
			if ((boolean) selectdayArray.get(i))
				day += Math.pow(2, i);
		}
//		System.out.println("day : "+day);
		conference.setDay(day);
		
		conference.setMaxMember(conferenceInfo.getMaxMember());
		conference.setNowMember(1);
		
		return conference;
	}
	
	@Override
	public Conference createConference(ConferencePostReq conferenceInfo, MultipartFile file, User user) throws ParseException {
		Conference conference = newConference(conferenceInfo);
		conference.setOwnerId(user.getId());
		// 파일 업로드
		if(file != null) {
			String thumnail_url = FileUtil.FileSave(file);
			conference.setThumbnailUrl(thumnail_url);
		}
		return conferenceRepository.save(conference);
	}

	@Override
	public Optional<Conference> ModifyConference(Long conference_id, ConferencePostReq conferenceInfo, MultipartFile file) {
		Optional<Conference> option = conferenceRepository.findById(conference_id);

		option.ifPresent(findConference -> {
			Conference conference = null;
			try {
				conference = newConference(conferenceInfo);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			findConference.setConferenceCategory(conference.getConferenceCategory());
			findConference.setTitle(conference.getTitle());
			findConference.setDescription(conference.getDescription());
			
			findConference.setCallStartDate(conference.getCallStartDate());
			findConference.setCallEndDate(conference.getCallEndDate());
			findConference.setCallStartTime(conference.getCallStartTime());
			findConference.setCallEndTime(conference.getCallEndTime());
			findConference.setMaxMember(conference.getMaxMember());
			
			findConference.setDay(conference.getDay());
			
			if(file != null) {
				String PrevFileName = option.get().getThumbnailUrl();
				FileUtil.FileDelete(PrevFileName);
				
				String thumnail_url = FileUtil.FileSave(file);
				findConference.setThumbnailUrl(thumnail_url);
			}
			
			conferenceRepository.save(findConference);
		});

		return option;
	}
	

	@Override
	public void UpdateConferenceMemberPlus(Long id) {
		Optional<Conference> option = conferenceRepository.findById(id);
		option.ifPresent(findConference -> {
			findConference.setNowMember(findConference.getNowMember()+1); 
			conferenceRepository.save(findConference);
		});
		
	}

	@Override
	public void UpdateConferenceMemberMinus(Long id) {
		Optional<Conference> option = conferenceRepository.findById(id);
		option.ifPresent(findConference -> {
			findConference.setNowMember(findConference.getNowMember()-1);
			conferenceRepository.save(findConference);
		});
	}

	
	@Override
	public void DeleteConference(Long id) {
		Optional<Conference> option = conferenceRepository.findById(id);
		//conference삭제할때
		//userConference의 정보같이 삭제되어야함
		//단 user가 사용한 conferencehistory는 삭제되지 않음으로함
		//conferencehistory는 유저가 conference를 사용함에 있어 
		option.ifPresent(findConference -> { 
			conferenceRepository.delete(findConference);
		});
	}
	
	@Override
	public List<Conference> getList(String title, String sort, Boolean is_active, Long conference_category, String sortType) {
		// Sort sorting = Sort.by(sort);
		// Sort sorting = null;
		// if (sortType == null)
		// sorting = Sort.by(sort);
		// else {
		// if (sortType == "ASC")
		// sorting = Sort.by(sort).ascending();
		// else
		// sorting = Sort.by(sort).descending();
		// }
		if (conference_category == -1) {
			if (sort == null) {
				if (title == null) {
					if (is_active == null)
						return conferenceRepository.findAll();
					else {
						if (is_active == false)
							return conferenceRepository.findByIsActiveFalse();
						else
							return conferenceRepository.findByIsActiveTrue();
					}
				}
				if (is_active == null)
					return conferenceRepository.findByTitleLike("%" + title + "%");
				else {
					if (is_active == false)
						return conferenceRepository.findByIsActiveFalseAndTitleLike("%" + title + "%");
					else
						return conferenceRepository.findByIsActiveTrueAndTitleLike("%" + title + "%");
				}
			}
			if (title == null) {
				if (sortType == null) {
					if (is_active == null)
						return conferenceRepository.findAll(Sort.by(sort));
					else {
						if (is_active == false)
							return conferenceRepository.findByIsActiveFalse(Sort.by(sort));
						else
							return conferenceRepository.findByIsActiveTrue(Sort.by(sort));
					}
				}
				if (sortType == "ASC") {
					if (is_active == null)
						return conferenceRepository.findAll(Sort.by(sort).ascending());
					else {
						if (is_active == false)
							return conferenceRepository.findByIsActiveFalse(Sort.by(sort).ascending());
						else
							return conferenceRepository.findByIsActiveTrue(Sort.by(sort).ascending());
					}
				}
				if (is_active == null)
					return conferenceRepository.findAll(Sort.by(sort).descending());
				else {
					if (is_active == false)
						return conferenceRepository.findByIsActiveFalse(Sort.by(sort).descending());
					else
						return conferenceRepository.findByIsActiveTrue(Sort.by(sort).descending());
				}
			}
			if (sortType == null) {
				if (is_active == null)
					return conferenceRepository.findByTitleLike("%" + title + "%", Sort.by(sort));
				else {
					if (is_active == false)
						return conferenceRepository.findByIsActiveFalseAndTitleLike("%" + title + "%", Sort.by(sort));
					else
						return conferenceRepository.findByIsActiveTrueAndTitleLike("%" + title + "%", Sort.by(sort));
				}
			}
			if (sortType == "ASC") {
				if (is_active == null)
					return conferenceRepository.findByTitleLike("%" + title + "%", Sort.by(sort).ascending());
				else {
					if (is_active == false)
						return conferenceRepository.findByIsActiveFalseAndTitleLike("%" + title + "%", Sort.by(sort).ascending());
					else
						return conferenceRepository.findByIsActiveTrueAndTitleLike("%" + title + "%", Sort.by(sort).ascending());
				}
			}
			if (is_active == null)
				return conferenceRepository.findByTitleLike("%" + title + "%", Sort.by(sort).descending());
			else {
				if (is_active == false)
					return conferenceRepository.findByIsActiveFalseAndTitleLike("%" + title + "%", Sort.by(sort).descending());
				else
					return conferenceRepository.findByIsActiveTrueAndTitleLike("%" + title + "%", Sort.by(sort).descending());
			}
		}
		if (sort == null) {
			if (title == null) {
				if (is_active == null)
					return conferenceRepository.findByConferenceCategory(conference_category);
				else {
					if (is_active == false)
						return conferenceRepository.findByConferenceCategoryAndIsActiveFalse(conference_category);
					else
						return conferenceRepository.findByConferenceCategoryAndIsActiveTrue(conference_category);
				}
			}
			if (is_active == null)
				return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category);
			else {
				if (is_active == false)
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveFalse("%" + title + "%", conference_category);
				else
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveTrue("%" + title + "%", conference_category);
			}
		}
		if (title == null) {
			if (sortType == null) {
				if (is_active == null)
					return conferenceRepository.findByConferenceCategory(conference_category, Sort.by(sort));
				else {
					if (is_active == false)
						return conferenceRepository.findByConferenceCategoryAndIsActiveFalse(conference_category, Sort.by(sort));
					else
						return conferenceRepository.findByConferenceCategoryAndIsActiveTrue(conference_category, Sort.by(sort));
				}
			}
			if (sortType == "ASC") {
				if (is_active == null)
					return conferenceRepository.findByConferenceCategory(conference_category, Sort.by(sort).ascending());
				else {
					if (is_active == false)
						return conferenceRepository.findByConferenceCategoryAndIsActiveFalse(conference_category, Sort.by(sort).ascending());
					else
						return conferenceRepository.findByConferenceCategoryAndIsActiveTrue(conference_category, Sort.by(sort).ascending());
				}
			}
			if (is_active == null)
				return conferenceRepository.findByConferenceCategory(conference_category, Sort.by(sort).descending());
			else {
				if (is_active == false)
					return conferenceRepository.findByConferenceCategoryAndIsActiveFalse(conference_category, Sort.by(sort).descending());
				else
					return conferenceRepository.findByConferenceCategoryAndIsActiveTrue(conference_category, Sort.by(sort).descending());
			}
		}
		if (sortType == null) {
			if (is_active == null)
				return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category, Sort.by(sort));
			else {
				if (is_active == false)
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveFalse("%" + title + "%", conference_category, Sort.by(sort));
				else
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveTrue("%" + title + "%", conference_category, Sort.by(sort));
			}
			
		}
		if (sortType == "ASC") {
			if (is_active == null)
				return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category, Sort.by(sort).ascending());
			else {
				if (is_active == false)
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveFalse("%" + title + "%", conference_category, Sort.by(sort).ascending());
				else
					return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveTrue("%" + title + "%", conference_category, Sort.by(sort).ascending());
			}
		}
		if (is_active == null)
			return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category, Sort.by(sort).descending());
		else {
			if (is_active == false)
				return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveFalse("%" + title + "%", conference_category, Sort.by(sort).descending());
			else
				return conferenceRepository.findByTitleLikeAndConferenceCategoryAndIsActiveTrue("%" + title + "%", conference_category, Sort.by(sort).descending());
		}
	}

	@Override
	public Page<Conference> getPageList(String title, String sort, int page, int size, Long conference_category,
			String sortType) {
		// Pageable paging = PageRequest.of(page, size);
		// Pageable paging = PageRequest.of(page, size, sort);
		Pageable pageable;
		// Sort sorting = Sort.by(sort);
		// Sort sorting = null;
		// if (sortType == null)
		// sorting = Sort.by(sort)(sort);
		// else {
		// if (sortType == "ASC")
		// sorting = Sort.by(sort).ascending();
		// else
		// sorting = Sort.by(sort).descending();
		// }
		if (conference_category == -1) {
			if (sort == null) {
				pageable = PageRequest.of(page, size);
				if (title == null)
					return conferenceRepository.findAll(pageable);
				return conferenceRepository.findByTitleLike("%" + title + "%", pageable);
			}
			switch (sortType) {
				case "ASC":
					pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
					break;
				case "DESC":
					pageable = PageRequest.of(page, size, Sort.by(sort).descending());
					break;
				default:
					pageable = PageRequest.of(page, size, Sort.by(sort));
			}
			if (title == null)
				return conferenceRepository.findAll(pageable);
			return conferenceRepository.findByTitleLike("%" + title + "%", pageable);
		}
		if (sort == null) {
			pageable = PageRequest.of(page, size);
			if (title == null)
				return conferenceRepository.findByConferenceCategory(conference_category, pageable);
			return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category,
					pageable);
		}
		switch (sortType) {
			case "ASC":
				pageable = PageRequest.of(page, size, Sort.by(sort).ascending());
				break;
			case "DESC":
				pageable = PageRequest.of(page, size, Sort.by(sort).descending());
				break;
			default:
				pageable = PageRequest.of(page, size, Sort.by(sort));
		}
		if (title == null)
			return conferenceRepository.findByConferenceCategory(conference_category, pageable);
		return conferenceRepository.findByTitleLikeAndConferenceCategory("%" + title + "%", conference_category,
				pageable);
	}

	
	/***
	 * 카테고리 리스트 전부 가져오기
	 * 방 생성 시 카테고리 설정 시 필요
	 */
	@Override
	public List<ConferenceCategory> getCategoryList() {
		return categoryRepository.findAll();
	}

	

	/**
	 * id에 해당하는 방에 대한 상세 정보를 가져오기
	 */
	@Override
	public Conference getConference(Long id) {
		Conference conference = conferenceRepository.findById(id).get();
		return conference;
	}


	@Override
	public ConferenceRes ConvertConference(Conference conference) {
		ConferenceRes res = new ConferenceRes();
		
		res.setId(conference.getId());
		res.setOwnerId(conference.getOwnerId());
		res.setConferenceCategoryId(conference.getConferenceCategory());
		res.setTitle(conference.getTitle());
		res.setDescription(conference.getDescription());
		res.setThumbnailUrl(conference.getThumbnailUrl());
		
		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat time = new SimpleDateFormat("HH:mm");
		
//		String startdate = date.format(conference.getCallStartDate());
//		String enddate = date.format(conference.getCallEndDate());
//		String starttime = time.format(conference.getCallStartTime());
//		String endtime = time.format(conference.getCallEndTime());

		res.setCallStartDate(date.format(conference.getCallStartDate()));
		res.setCallEndDate(date.format(conference.getCallEndDate()));
		res.setCallStartTime(time.format(conference.getCallStartTime()));
		res.setCallEndTime(time.format(conference.getCallEndTime()));
		
		res.setCallSetTime(conference.getCallSetTime());
		res.setMaxMember(conference.getMaxMember());
		res.setNowMember(conference.getNowMember());
		
		int selectedDay = conference.getDay();
		boolean days[] = new boolean[7];
		for(int i=0;i<7;i++) {
			if ((selectedDay & (int)Math.pow(2, i)) != 0) days[i] = true;
			else days[i] = false;
		}
		JSONArray jsonarray = new JSONArray(days);
//		for(boolean conferences : days) {
//			System.out.print(conferences+" ");
//		}
//		System.out.println();
//		System.out.println("여기는 방이 새로만들어지는과정입니다");
//		System.out.println(jsonarray);
//		System.out.println(jsonarray.toString());
		res.setSelectedDays(jsonarray.toString());
		
		return res;
	}


}
