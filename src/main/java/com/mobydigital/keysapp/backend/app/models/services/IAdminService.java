package com.mobydigital.keysapp.backend.app.models.services;


import com.mobydigital.keysapp.backend.app.models.entity.Admins;

public interface IAdminService {
	
	public Admins findByDni(Integer dni);

}
