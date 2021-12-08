package com.ssafy.common.util;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

public class FileUtil {
	
	public static String path = "../frontend/src/assets/upload/";
	
	public static String FileSave(MultipartFile upload_file) {
		String absolutepath = new File("").getAbsolutePath() + "\\";
		
		
		File file = new File(absolutepath + path);
		if(!file.exists()) {
			file.mkdirs();
		}
		String thumbnail_url = "";
		if(!upload_file.isEmpty()) {
			thumbnail_url = absolutepath + path + upload_file.getOriginalFilename();
			file = new File(thumbnail_url);
			try {
				upload_file.transferTo(file);
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return upload_file.getOriginalFilename();
	}
	
	public static void FileDelete(String FileName) {
		String absolutepath = new File("").getAbsolutePath() + "\\";
		
		File file = new File(absolutepath + path + FileName);
		
		if(file.exists()) {
			file.delete();
		}
		
	}
}
