package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobydigital.keysapp.backend.app.models.dao.IKeyDao;
import com.mobydigital.keysapp.backend.app.models.entity.Key;


@Service
public class KeyServiceImp implements IKeyService {

	@Autowired
	private IKeyDao keyDao;

	@Override
	@Transactional(readOnly = true)
	public List<Key> findAll() {

		return (List<Key>) keyDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Key findById(Integer id) {
	
		return keyDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Key save(Key key) {
		
		return keyDao.save(key);
	}

	@Override
	@Transactional
	public void deleteById(Integer id ) {
		keyDao.deleteById(id);;
	}

}
