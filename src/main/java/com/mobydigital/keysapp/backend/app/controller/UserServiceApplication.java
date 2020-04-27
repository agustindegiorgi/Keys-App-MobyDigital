package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserServiceApplication {

	@GetMapping("/")
	public String login(Integer username, Integer password) {

		return "conexión establecida";
	}
	/*
	 * public String login() { return "Hola Moby!!!!"; }
	 */

}
