package com.mobydigital.keysapp.backend.app.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    public User(int i, String string, String string2, String string3) {
		// TODO Auto-generated constructor stub
	}
	private int id;
    private String name;
    private String email;
    private String mobile;
}
