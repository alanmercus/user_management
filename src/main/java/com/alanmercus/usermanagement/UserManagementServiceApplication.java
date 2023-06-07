package com.alanmercus.usermanagement;

import com.alanmercus.usermanagement.model.User;
import com.alanmercus.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserManagementServiceApplication implements CommandLineRunner {
// public class UserManagementServiceApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(UserManagementServiceApplication.class, args);
	}

	// @Autowired
	// private UserRepository userRepository;
	// @Override
	// public void run(String... args) throws Exception {

	// 	User user = new User();
	// 	user.setFirstName("Abhishek");
	// 	user.setLastName("Shrivastav");
	// 	user.setEmailId("abhishekshrivastav@outlook.com");
	// 	user.setUserName("alanmercus");
	// 	userRepository.save(user);
	// }
}
