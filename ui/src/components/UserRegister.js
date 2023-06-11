import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createUser, updateUser, fetchUserById } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';


const UserRegister = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    userName: '',
    password: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true }); // Dispatch the loading action
        const response = await dispatch(fetchUserById(userId));
        const fetchedUser = response.payload;
        console.log('User fetched successfully!');

        setUser(fetchedUser);

        dispatch({ type: 'SET_LOADING', payload: false }); // Dispatch the loading action to indicate completion
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message }); // Dispatch the setError action
        console.error('Error fetching user:', error);
      }
    };


    if (userId) {
      fetchUser();
    }
  }, [userId, dispatch]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
  
      if (user.password !== user.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      if (userId) {
        await dispatch(updateUser({userId, user}));
        alert('User updated successfully!');
        navigate('/users');
      } else {
        await dispatch(createUser(user)); 
        alert('User registered successfully!');
        navigate('/users');
      }
  
      setUser({
        firstName: '',
        lastName: '',
        emailId: '',
        userName: '',
        password: '',
        confirmPassword: ''
      });
  
      dispatch({ type: 'SET_LOADING', payload: false }); 
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      console.error('Error registering or updating user:', error);
    }
  };
  

  return (
    <div className="container">
      <h2>{userId ? 'Edit User' : 'User Registration'}</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit} className='justify-content-center align-items-center'>
        <div className="row g-2">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="form-group col-md-6">
            <label htmlFor="emailId">Email Id:</label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              name="emailId"
              value={user.emailId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="form-group col-md-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          {userId ? 'Update' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
