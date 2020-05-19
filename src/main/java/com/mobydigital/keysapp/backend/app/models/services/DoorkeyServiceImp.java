package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobydigital.keysapp.backend.app.models.dao.IDoorkeyDao;

import com.mobydigital.keysapp.backend.app.models.entity.Doorkey;




@Service
public class DoorkeyServiceImp implements IDoorkeyService {

	@Autowired
	private IDoorkeyDao doorkeyDao;

	@Override
	@Transactional(readOnly = true)
	public List<Doorkey> findAll() {

		return (List<Doorkey>) doorkeyDao.findAll();
	}
	@Override
	public List<Doorkey> findKeyDninull() {
		
		return doorkeyDao.findKeyDninull();
	}

	@Override
	@Transactional(readOnly = true)
	public Doorkey findById(Integer id) {
	
		return doorkeyDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Doorkey save(Doorkey doorkey) {
		
		return doorkeyDao.save(doorkey);
	}

	@Override
	@Transactional
	public void deleteById(Integer id ) {
		doorkeyDao.deleteById(id);;
	}

}
