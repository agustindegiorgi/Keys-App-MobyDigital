package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;


import com.mobydigital.keysapp.backend.app.models.entity.User;

public interface IUserService {

	public List<User> findAll();
	
	public User findByDni(Integer dni);
	
	public User save(User user);
	
	public void delete(Integer dni);
	
}
