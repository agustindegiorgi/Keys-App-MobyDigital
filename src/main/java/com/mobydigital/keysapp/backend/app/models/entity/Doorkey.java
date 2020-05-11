package com.mobydigital.keysapp.backend.app.models.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="doorkeys")
public class Doorkey implements Serializable {


	
	@Id
	private Integer id;
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "dni")
	@JsonIgnore
	private User user;

	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	private static final long serialVersionUID = 1L;
	
}
