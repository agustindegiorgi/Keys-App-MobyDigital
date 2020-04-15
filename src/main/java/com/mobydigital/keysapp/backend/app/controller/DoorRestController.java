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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Door;
import com.mobydigital.keysapp.backend.app.models.services.IDoorService;

@RestController
@RequestMapping("/api")
public class DoorRestController {

	@Autowired
	private IDoorService doorService;

	@GetMapping("/doors")
	public List<Door> list() {

		return doorService.findAll();
	}

	@PostMapping("/door")
	@ResponseStatus(HttpStatus.CREATED)
	public Door create(@RequestBody Door door) {

		return doorService.save(door);
	}

	@GetMapping("/door/{id}")
	public Door findById(@PathVariable Integer id) {

		return doorService.findByid(id);
	}

	@DeleteMapping("/door/{id}")
	public ResponseEntity<Object> delete(@PathVariable Integer id) {
		doorService.deleteById(id);
		return new ResponseEntity<Object>("PUERTA BORRADA",HttpStatus.OK);
	}

	@PutMapping("/door/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Door upDate(@RequestBody Door door, @PathVariable Integer id) {
		Door currenDoor = doorService.findByid(id);

		currenDoor.setName(door.getName());

		doorService.save(currenDoor);

		return doorService.save(currenDoor);
	}

}
