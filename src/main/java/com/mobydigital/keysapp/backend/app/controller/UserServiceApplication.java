package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins ="*")
public class UserServiceApplication {

	  @GetMapping("/")
	   public String login(Integer username, Integer password){

		if (username == 1234 && password == 1234) {
			
			return "ok";	
		}
			
		
		return "error";
		
		
	}

}
