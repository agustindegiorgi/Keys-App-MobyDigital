package com.mobydigital.keysapp.backend.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Key;
import com.mobydigital.keysapp.backend.app.models.services.IKeyService;

@RestController
@RequestMapping("/api")
public class KeyRestController {

	@Autowired
	private IKeyService keyService;

	@GetMapping("/keys")

	public ResponseEntity<?> list() {

		try {
			return new ResponseEntity<Object>(keyService.findAll(), HttpStatus.OK);

		} catch (DataAccessException e) {
			return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/key/{id}")
	public ResponseEntity<?> findKeyByID(@PathVariable Integer id) {
		Key key = null;
		Map<String, Object> response = new HashMap<>();

		try {
			key = keyService.findById(id);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al consultar en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (key == null) {
			response.put("mensaje", "La puerta no existe en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Object>(key, HttpStatus.OK);
	}

	@PostMapping("/key")
	public Key create(@RequestBody Key key) {

		return keyService.save(key);
	}

	@DeleteMapping("/key/{id}")
	public ResponseEntity<Object> deleteByid(@PathVariable Integer id) {
		keyService.deleteById(id);

		return new ResponseEntity<Object>("LLAVE BORRADA", HttpStatus.OK);
	}

	@PutMapping("/key/{id}")
	public Key update(@RequestBody Key key, @PathVariable Integer id) {
		Key currentKey = keyService.findById(id);
		currentKey.setName(key.getName());

		return keyService.save(currentKey);
	}

}
