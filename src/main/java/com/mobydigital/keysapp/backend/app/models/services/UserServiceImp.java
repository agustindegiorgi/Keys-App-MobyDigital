package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobydigital.keysapp.backend.app.models.dao.IUserDao;
import com.mobydigital.keysapp.backend.app.models.entity.User;

@Service
public class UserServiceImp implements IUserService {

	@Autowired
	private IUserDao userDao;

	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {

		return (List<User>) userDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public User findByDni(Integer dni) {

		return userDao.findById(dni).orElse(null);
	}

	@Override
	@Transactional
	public User save(User user) {

		return userDao.save(user);
	}

	@Transactional
	@Override
	public void delete(Integer dni) {

		userDao.deleteById(dni);

	}

}
