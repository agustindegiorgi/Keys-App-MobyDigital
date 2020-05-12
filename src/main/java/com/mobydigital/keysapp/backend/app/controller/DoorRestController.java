package com.mobydigital.keysapp.backend.app.controller;

import java.util.HashMap;
import java.util.List;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mobydigital.keysapp.backend.app.models.entity.Door;
import com.mobydigital.keysapp.backend.app.models.services.IDoorService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DoorRestController {

	@Autowired
	private IDoorService doorService;

	@GetMapping("/doors")
	public ResponseEntity<?> list() {

		try {

			return new ResponseEntity<Object>(doorService.findAll(), HttpStatus.OK);

		} catch (DataAccessException e) {

			return new ResponseEntity<Object>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/door")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@RequestBody Door door) {

		Door doorNew = null;
		Map<String, Object> response = new HashMap<>();

		try {
			doorNew = doorService.save(door);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al realizar el insert en la DB");
			response.put("Erro", e.getMessage());

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return new ResponseEntity<Object>(doorNew, HttpStatus.OK);

	}

	@GetMapping("/door/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id) {
		Door door = null;

		Map<String, Object> response = new HashMap<>();

		try {
			door = doorService.findByid(id);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al Realizar la consulta en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (door == null) {
			response.put("mensaje", "No existe esa puerta en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Object>(door, HttpStatus.OK);
	}

	@DeleteMapping("/door/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id) {

		Map<String, Object> response = new HashMap<>();

		try {
			doorService.deleteById(id);
		} catch (DataAccessException e) {

			response.put("mensaje", "Error al relizar delete en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "la puerta fue borrada con Exito");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

	@PutMapping("/door/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> upDate(@RequestBody Door door, @PathVariable Integer id) {

		Door currentDoor = doorService.findByid(id);
		Door doorUpdated = null;

		Map<String, Object> response = new HashMap<>();

		if (currentDoor == null) {
			response.put("mensaje", "No se puede editar, la puerta no existe en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		try {
			currentDoor.setName(door.getName());
			doorUpdated = doorService.save(currentDoor);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al querer editar la puerta");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}

		response.put("mensaje", "La puerta fue actulizada con Exito");
		response.put("Door", doorUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);

	}

}
