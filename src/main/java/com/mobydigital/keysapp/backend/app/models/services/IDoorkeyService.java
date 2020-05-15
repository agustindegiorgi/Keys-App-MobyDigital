package com.mobydigital.keysapp.backend.app.models.services;

import java.util.List;

import com.mobydigital.keysapp.backend.app.models.entity.Doorkey;



public interface IDoorkeyService  {
	
	public List<Doorkey> findAll();
	public Doorkey findById(Integer id);
	public Doorkey save(Doorkey doorkey);
	public void deleteById(Integer id);
	public List<Doorkey> findKeyDninull();
	
	

}
