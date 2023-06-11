import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../actions/userActions';

const ListUserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
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
              </td>
            </tr>
          )) :""}
        </tbody>
      </table> : <span className='text-center'> No Records</span> }
      
    </div>
  );
};

export default ListUserComponent;
