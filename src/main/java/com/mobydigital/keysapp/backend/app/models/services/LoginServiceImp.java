package com.mobydigital.keysapp.backend.app.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobydigital.keysapp.backend.app.models.dao.ILoginDao;

import com.mobydigital.keysapp.backend.app.models.entity.Login;

@Service
public class LoginServiceImp implements ILoginService {

	@Autowired
	private ILoginDao adminDao;
	
	@Override
	public Login findByDni(Integer dni) {
		
		return adminDao.findById(dni).orElse(null);
	}

	@Override
	public Login findByUserName(String username) {
		
		return adminDao.findByusername(username);
	}

}
