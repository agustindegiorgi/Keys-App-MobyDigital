package com.mobydigital.keysapp.backend.app.models.dao;


import org.springframework.data.repository.CrudRepository;


import com.mobydigital.keysapp.backend.app.models.entity.Admins;

public interface IAdminDao extends CrudRepository<Admins, Integer> {

}
