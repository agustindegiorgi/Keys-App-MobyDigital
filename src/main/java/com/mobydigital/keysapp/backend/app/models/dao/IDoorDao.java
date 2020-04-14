package com.mobydigital.keysapp.backend.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mobydigital.keysapp.backend.app.models.entity.Door;

public interface IDoorDao extends CrudRepository<Door, Integer> {

}
