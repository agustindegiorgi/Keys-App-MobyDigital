package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.User;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
@CrossOrigin(origins ="*")
public class UserServiceApplication {

	  @GetMapping("/")
	   public String login(String username, String password){
	
		if (username == "1234" || password == "1234") {
		  
			return "nose";	
			
		}else if (username == "1234" && password == "1234") {
			
		
			
			return "ok";
		}
			
		
		return "error";
		
		
	}

}
