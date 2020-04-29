package com.mobydigital.keysapp.backend.app.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mobydigital.keysapp.backend.app.models.dao.IAdminDao;

import com.mobydigital.keysapp.backend.app.models.entity.Admins;

@Service
public class AdminServiceImp implements IAdminService {

	@Autowired
	private IAdminDao adminDao;
	
	@Override
	public Admins findByDni(Integer dni) {
		
		return adminDao.findById(dni).orElse(null);
	}

}
