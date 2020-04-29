package com.mobydigital.keysapp.backend.app.models.entity;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
public class Admins implements Serializable {
   
	@Id
	private Integer dni;
	private Integer password;

	public Integer getDni() {
		return dni;
	}

	public void setDni(Integer dni) {
		this.dni = dni;
	}

	public Integer getPassword() {
		return password;
	}

	public void setPassword(Integer password) {
		this.password = password;
	}

	private static final long serialVersionUID = 1L;

}
