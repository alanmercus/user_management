package com.alanmercus.usermanagement.service;

import com.alanmercus.usermanagement.exception.ResourceNotFoundException;
import com.alanmercus.usermanagement.model.User;
import com.alanmercus.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        // Encrypt the user's password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User getUserById(long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
    }

    public User updateUser(long id, User userDetails) {
        User updateUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        updateUser.setFirstName(userDetails.getFirstName());
        updateUser.setLastName(userDetails.getLastName());
        updateUser.setEmailId(userDetails.getEmailId());
        // Encrypt the new password if it is provided
        if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
            updateUser.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        }

        return userRepository.save(updateUser);
    }

    public void deleteUser(long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
        userRepository.delete(user);
    }

    public boolean checkPassword(String username, String password) {
        User user = userRepository.findByUserName(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with username: " + username));
        return passwordEncoder.matches(password, user.getPassword());
    }
}