package com.mobydigital.keysapp.backend.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mobydigital.keysapp.backend.app.models.entity.Doorkey;


public interface IDoorkeyDao extends CrudRepository<Doorkey, Integer> {

}
