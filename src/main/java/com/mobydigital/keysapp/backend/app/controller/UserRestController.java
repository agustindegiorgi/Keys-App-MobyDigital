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

//5to
//Todas las request del front necesarias.

@CrossOrigin(origins = { "http://localhost:4200"}) //otorgamos permiso a esta URL de todas las request.
@RestController  //rest utiliza cuatro verbos http...
@RequestMapping("/api") //Generamos nuestra URL que va a anteponer las otras.
public class UserRestController {                


	//inyectamos la interface creada IUserservice que va a buscar la clase que la implementa.
	@Autowired
	private IUserService userService;
    
    //generamos un endpoint del metodo
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

			response.put("mensaje", "Error al realizar la contulta en la DB");
			response.put("error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		if (user == null) {

			response.put("mensaje", "No se encuentra ese Usuario en la Base de Datos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Object>(userService.findByDni(dni), HttpStatus.OK);

	}

	@PostMapping("/user")
	public ResponseEntity<?> create(@RequestBody User user) {

		User userNew = null;
		Map<String, Object> response = new HashMap<>();

		try {
			userNew = userService.save(user);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la DB");
			response.put("error", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Object>(userNew, HttpStatus.OK);

	}

	@PutMapping("/user/{dni}")
	public ResponseEntity<?> update(@RequestBody User user, @PathVariable Integer dni) {
		User currentUser = userService.findByDni(dni);
		User userUpdated = null;
		Map<String, Object> response = new HashMap<>();

		if (currentUser == null) {

			response.put("mensaje", "No se puede editar el  Usuario, no existe en la DB");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		try {
			currentUser.setEmail(user.getEmail());
			currentUser.setTelephone(user.getTelephone());
			userUpdated= userService.save(currentUser);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al querer editar el usuario ");
			response.put("error", e.getMessage());
			
			return new ResponseEntity<Map<String, Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
        
		response.put("mensaje", "El Usuario ha sido actualizado con exito!");
		response.put("user", userUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);

	}

	@DeleteMapping("/user/{dni}")
	public ResponseEntity<?> delete(@PathVariable Integer dni) {
         
		Map<String,Object> response = new HashMap<>();
		
		try {
			  userService.delete(dni);
			

		} catch (DataAccessException e) {
			response.put("mensaje", "eror al querer eliminar el usuario");
			response.put("erro", e.getMessage());
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El usuario fue borrado con exito!");
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
	}

}
