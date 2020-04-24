package com.mobydigital.keysapp.backend.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
 ///wrwerwerr
	@GetMapping("/keys")
	public List<Key> list() {

		return keyService.findAll();
	}

	@GetMapping("/key/{id}")
	public Key findKeyByID(@PathVariable Integer id) {

		return keyService.findById(id);
	}
	
	@PostMapping("/key")
	public Key create(@RequestBody Key key) {
		
		return keyService.save(key);
	}
	
	@DeleteMapping("/key/{id}")
	public ResponseEntity<Object> deleteByid(@PathVariable Integer id ) {
		keyService.deleteById(id);
		
		return new ResponseEntity<Object>( "LLAVE BORRADA", HttpStatus.OK);
	}
	
	@PutMapping("/key/{id}")
	public Key update(@RequestBody Key key,@PathVariable Integer id ) {
		Key currentKey= keyService.findById(id);
		currentKey.setName(key.getName());
		
		return keyService.save(currentKey);
	}
	

}
