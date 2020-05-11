package com.mobydigital.keysapp.backend.app.controller;

import java.util.HashMap;

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

import com.mobydigital.keysapp.backend.app.models.entity.Doorkey;
import com.mobydigital.keysapp.backend.app.models.services.IDoorkeyService;


@RestController
@RequestMapping("/api")
public class DoorkeyRestController {

	@Autowired
	private IDoorkeyService doorkeyService;

	@GetMapping("/doorkeys")

	public ResponseEntity<?> list() {

		try {
			return new ResponseEntity<Object>(doorkeyService.findAll(), HttpStatus.OK);

		} catch (DataAccessException e) {
			return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/doorkey/{id}")
	public ResponseEntity<?> findKeyByID(@PathVariable Integer id) {
		Doorkey doorkey = null;
		Map<String, Object> response = new HashMap<>();

		try {
			doorkey = doorkeyService.findById(id);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al consultar en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (doorkey == null) {
			response.put("mensaje", "La puerta no existe en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Object>(doorkey, HttpStatus.OK);
	}

	@PostMapping("/doorkey")
	public ResponseEntity<?> create(@RequestBody Doorkey doorkey) {

		Doorkey doorkeyNew = null;
		Map<String, Object> response = new HashMap<>();

		try {
			doorkeyNew = doorkeyService.save(doorkey);

		} catch (DataAccessException e) {
			response.put("mensaje", "ERROR!,No puede hacer un Insert en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Object>(doorkeyNew, HttpStatus.OK);
	}

	@DeleteMapping("/doorkey/{id}")
	public ResponseEntity<?> deleteByid(@PathVariable Integer id) {
		Map<String, Object> response = new HashMap<>();
		try {
			doorkeyService.deleteById(id);

		} catch (DataAccessException e) {
			response.put("Mensaje", "Error al intentar eliminar la llave en la DB");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "la llave fue eliminada con extito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

	@PutMapping("/doorkey/{id}")
	public ResponseEntity<?> update(@RequestBody Doorkey doorkey, @PathVariable Integer id) {
		Doorkey currentDoorKey = doorkeyService.findById(id);
		Doorkey doorkeyUpdated = null;
		Map<String, Object> response = new HashMap<>();

		if (currentDoorKey == null) {
			response.put("mensaje", "No existe esta llave en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		try {
			currentDoorKey.setName(doorkey.getName());
			doorkeyUpdated = doorkeyService.save(currentDoorKey);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error en la DB, no se pudo actualizar la llave");
			response.put("Error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "Se actulizo con exito la llave");
		response.put("DoorKey", doorkeyUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);

	}

}
