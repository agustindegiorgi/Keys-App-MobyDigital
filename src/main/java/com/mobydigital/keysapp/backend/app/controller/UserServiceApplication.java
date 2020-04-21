package com.mobydigital.keysapp.backend.app.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.User;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserServiceApplication {


	@GetMapping("/")
	public String login(){
		return "authenticated successfully" ;
	}

	@GetMapping("/getUsers")
	public List<User> getUsers(){
		return Stream.of(new User(43369999, "Agustín", "De Giorgi", "3535183039", "dgagustin01@gmail.com"),
				new User(43369999, "Norberto", "Magarzo", "3515325534", "norbertom@gmail.com")).
				collect(Collectors.toList());
	}

}
