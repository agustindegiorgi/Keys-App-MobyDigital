package com.mobydigital.keysapp.backend.app.models.dao;



import org.springframework.data.repository.CrudRepository;

import com.mobydigital.keysapp.backend.app.models.entity.User;

public interface IUserDao extends CrudRepository<User, Integer> {

}
