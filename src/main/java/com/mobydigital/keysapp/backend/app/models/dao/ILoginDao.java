package com.mobydigital.keysapp.backend.app.models.dao;


import org.springframework.data.repository.CrudRepository;



import com.mobydigital.keysapp.backend.app.models.entity.Login;

public interface ILoginDao extends CrudRepository<Login, Integer> {

}
