package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Admins;
import com.mobydigital.keysapp.backend.app.models.services.IAdminService;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserServiceApplication {

	 @GetMapping("/")
	public String login(Integer username, Integer password) {
		/*
		 * ADMINISTRADOR
		 */
		if (username == 1234 && password == 1234) {
			return "OK ADMIN";
		} else {
			/*
			 * USUARIO
			 */
			if (username == 4321 && password == 4321) {
				return "OK USER";
			} else {
				return "FAILED";
			}
		}
	}

/*	@Autowired
	private IAdminService adminService;

	@GetMapping("/")
	public String inicio(Integer username, Integer password) {

		Integer dni = username;

		Admins admin = adminService.findByDni(dni);

		if(admin.getPassword() == password) {
			
			return "OK ADMIN";
		}

		return "FAILED";
	}*/
}