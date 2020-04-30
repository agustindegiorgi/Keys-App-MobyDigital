package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Login;
import com.mobydigital.keysapp.backend.app.models.services.ILoginService;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserServiceApplication {

	@Autowired
	private ILoginService loginService;
	
	

	@GetMapping("/")
	public String inicio(Integer username, Integer password) {
        
		Integer dni = username;

		Login login = loginService.findByDni(dni);

		if (login.getPassword().equals(password) && login.getRol().equals("ADMIN")) {

			return "OK ADMIN";

		} else if (login.getPassword().equals(password) && login.getRol().equals("USER")) {

			return "OK USER";

		}
		return "FAILED";

	}
}