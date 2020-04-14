package com.mobydigital.keysapp.backend.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mobydigital.keysapp.backend.app.models.entity.Key;

public interface IKeyDao extends CrudRepository<Key, Integer> {

}
