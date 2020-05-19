package com.mobydigital.keysapp.backend.app.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.mobydigital.keysapp.backend.app.models.entity.Doorkey;



public interface IDoorkeyDao extends CrudRepository<Doorkey, Integer> {
	public static final String FIND_DNI = "SELECT * FROM heroku_b86de7ab77a19b9.doorkeys WHERE dni IS NULL ";
	@Query(value = FIND_DNI, nativeQuery = true)
	public  List<Doorkey> findKeyDninull();

}
