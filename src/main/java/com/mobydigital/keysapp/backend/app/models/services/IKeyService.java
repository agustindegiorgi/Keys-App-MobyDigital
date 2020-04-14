package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;

import com.mobydigital.keysapp.backend.app.models.entity.Key;

public interface IKeyService  {
	
	public List<Key> findAll();
	public Key findById(Integer id);
	public Key save(Key key);
	public void deleteById(Integer id);
	
	

}
