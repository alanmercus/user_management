import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser,checkPassword } from '../actions/userActions';

const ListUserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };
  const handleCheckPassword = (username) => {
    // Implement password check logic here
    const password = prompt("Please enter your password:");
    if (password) {
      dispatch(checkPassword({ uName: username, pwd: password })).then((response) => {
        if (response.payload) {
          alert("Password is correct!");
        } else {
          alert("Password is incorrect!");
        }
      })
      .catch((error) => {
        alert("Error checking password: " + error.message);
      });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">List Users</h2>
      <Link to="/register" className="btn btn-primary mb-2">
        Add User
      </Link>
      <br></br>
      {users ? <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>User Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users ? users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailId}</td>
              <td>
                <Link className="btn btn-info" to={`/edituser/${user.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
                <button className="btn btn-warning" 
                style={{ marginLeft: '10px' }}
                onClick={() => handleCheckPassword(user.userName)}>
                  Check Password
                </button>
              </td>
            </tr>
          )) :""}
        </tbody>
      </table> : <span className='text-center'> No Records</span> }
      
    </div>
  );
};

export default ListUserComponent;
