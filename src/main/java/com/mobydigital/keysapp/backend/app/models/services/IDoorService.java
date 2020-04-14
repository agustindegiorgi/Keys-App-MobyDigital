package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;


import com.mobydigital.keysapp.backend.app.models.entity.Door;



public interface IDoorService  {

	public List<Door> findAll();
	
	public Door findByid(Integer id);
	
	public Door save(Door door);
	
	public void deleteById(Integer id );

	
}
