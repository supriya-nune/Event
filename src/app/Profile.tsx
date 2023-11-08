import React, { useState } from 'react';

const Profile = () => {
  const userData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  };

  const handleLogout = (event) => {
    console.log('User logged out');
  };

  return (
    <div className="profile-details">
      <div className="logo">
            <img src="/profile.png" alt="Logo"/>
        </div>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
    
      <button className="profile-button">Logout</button>
    </div>
  );
};

export default Profile;
