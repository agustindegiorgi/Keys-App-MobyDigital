package com.mobydigital.keysapp.backend.app.models.services;



import com.mobydigital.keysapp.backend.app.models.entity.Login;

public interface ILoginService {
	
	public Login findByDni(Integer dni);
    public Login findByUserName(String username);
}
