package com.mobydigital.keysapp.backend.app.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Login;
import com.mobydigital.keysapp.backend.app.models.entity.User;
import com.mobydigital.keysapp.backend.app.models.services.ILoginService;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserServiceApplication {

	@Autowired
	private ILoginService loginService;
	
	@GetMapping("/")
	public String login(String username, Integer password) {
     
	 Login logged= loginService.findByUserName(username);
	 String userNameDB  = logged.getUserName();
	 Integer passwordDB = logged.getPassword();
	 String rolDB       = logged.getRol();
	 
	 if ( passwordDB.equals(password)&& rolDB.equals("ADMIN")) {
		return  "OK ADMIN";
	}else if (passwordDB.equals(password)&& rolDB.equals("USER")) {
		
		return "OK USER";
	}
	 
	
	 return "FAILED";
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> create (@RequestBody Login login){
		Login loginNew =null;
		
		Map<String, Object> response = new HashMap<>();
		try {
			loginNew = loginService.save(login);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al querer guardar ");
			response.put("error", e.getMessage());
			return  new ResponseEntity<Map<String, Object>>(response ,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
		return new ResponseEntity< Object>(loginNew, HttpStatus.OK);
	}
	@DeleteMapping("/login")
	public ResponseEntity<?> delete(@PathVariable String username){
		Map<String, Object> response = new HashMap<>();
		
		try {
		    	loginService.delete(username);
		} catch (DataAccessException e) {
			
			response.put("mensaje","Error al intentar eliminar " );
			response.put("error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		response.put("mensaje", "Eliminado con Exito!!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
	
	@PutMapping("/login/{username}")
	public ResponseEntity<?> update(@RequestBody Login login, @PathVariable String username){
		Login currentLogin = loginService.findByUserName(username);
		Login loginUpdate =null;
		Map<String, Object> response = new HashMap<>();
		
		if (currentLogin ==null) {
			response.put("menaje", "No existe en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		try {
		     currentLogin.setPassword(login.getPassword());
		     loginUpdate =  loginService.save(currentLogin);
		} catch (DataAccessException e) {
			response.put("mensaje", "error querer actualizar");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje","Acutulizado con Exito!");
		response.put("login", loginUpdate);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
}