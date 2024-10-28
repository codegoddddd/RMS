import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth from your AuthContext file

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use the logout function from AuthContext

  useEffect(() => {
    // Retrieve user email from localStorage
    const userEmail = localStorage.getItem('userEmail');

    // Ensure that userEmail is not null or undefined before attempting to fetch data
    if (userEmail) {
      const apiUrl = `http://localhost:8000/abc/findone/${userEmail}`;

      // Fetch user data from the server
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
    } else {
      console.error('User email not available in localStorage');
      setLoading(false);
    }
  }, []); // useEffect dependency array

  const handleLogout = () => {
    // Clear user-related data from localStorage
    localStorage.removeItem('userEmail');
  
    // Use the logout function from AuthContext
    logout();
  
    // Perform any other logout actions if needed
  
    // Redirect to the login page using the navigate function
    navigate('/login');
    window.alert("Logged out")
  };

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (!userData) {
    return <p>Error loading user data.</p>;
  }

  return (
    <div style={{ backgroundImage: `url(${require('../loginBG.jpeg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <br /><br />
      <center>
        <div className="text-center" style={{ border: '1px solid white', borderRadius: '10px', width: '30%', background: 'transparent', backdropFilter: 'blur(60px)' }}>
          <h2>User Profile</h2>
          <p>First Name: {userData.data.fname || 'N/A'}</p>
          <p>Last Name: {userData.data.lname || 'N/A'}</p>
          <p>Email: {userData.data.email || 'N/A'}</p>
          {/* Add more details as needed */}

          <button onClick={handleLogout} className="btn btn-warning mx-2 my-2">
            Logout
          </button>
        </div>
      </center>
      <br /><br />
    </div>
  );
}

export default Profile;
