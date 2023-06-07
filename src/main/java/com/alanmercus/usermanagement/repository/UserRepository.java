package com.alanmercus.usermanagement.repository;

import com.alanmercus.usermanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

// all crud database methods
}
