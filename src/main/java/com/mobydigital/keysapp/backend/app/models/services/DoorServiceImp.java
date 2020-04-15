package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobydigital.keysapp.backend.app.models.dao.IDoorDao;
import com.mobydigital.keysapp.backend.app.models.entity.Door;

@Service
public class DoorServiceImp implements IDoorService {

	@Autowired
	private IDoorDao doorDao;

	@Override
	@Transactional(readOnly = true)
	public List<Door> findAll() {

		return (List<Door>) doorDao.findAll();
	}

	@Override
	@Transactional
	public Door save(Door door) {

		return doorDao.save(door);
	}

	@Override
	@Transactional(readOnly = true)
	public Door findByid(Integer id) {

		return doorDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public void deleteById(Integer id) {
		
		doorDao.deleteById(id);
		
	}

}
