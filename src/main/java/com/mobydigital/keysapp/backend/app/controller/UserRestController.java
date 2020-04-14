package com.mobydigital.keysapp.backend.app.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.User;
import com.mobydigital.keysapp.backend.app.models.services.IUserService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class UserRestController {

	@Autowired
	private IUserService userService;

	@GetMapping("/users")
	public ResponseEntity<Object> list() {

		try {
			return (ResponseEntity<Object>) new ResponseEntity<Object>(userService.findAll(), HttpStatus.OK);

		} catch (DataAccessException e) {
			return new ResponseEntity<Object>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/user/{dni}")
	public ResponseEntity<?> show(@PathVariable Integer dni) {

		User user = null;
		Map<String, Object> response = new HashMap<>();

		try {
			user = userService.findByDni(dni);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al realizar la contulta");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		if (user == null) {

			response.put("mensaje", "No se encuentra ese Usuario en la Base de Datos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Object>(userService.findByDni(dni), HttpStatus.OK);

	}

	@PostMapping("/user")
	public ResponseEntity<Object> create(@RequestBody User user) {
        
		
		try {
			return new ResponseEntity<Object>(userService.save(user), HttpStatus.CREATED);

		} catch (DataAccessException e) {

			return new ResponseEntity<Object>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping("/user/{dni}")
	public ResponseEntity<Object> update(@RequestBody User user, @PathVariable Integer dni) {
		User currentUser = userService.findByDni(dni);
		currentUser.setEmail(user.getEmail());
		currentUser.setTelephone(user.getTelephone());

		try {
			return new ResponseEntity<Object>(userService.save(currentUser), HttpStatus.CREATED);

		} catch (DataAccessException e) {
			return new ResponseEntity<Object>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@DeleteMapping("/user/{dni}")
	public ResponseEntity<Object> delete(@PathVariable Integer dni) {

		try {
			userService.delete(dni);
			return new ResponseEntity<Object>("CONTACTO BORRADO", HttpStatus.OK);

		} catch (DataAccessException e) {
			return new ResponseEntity<Object>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
