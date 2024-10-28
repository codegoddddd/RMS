import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
  const { userEmail } = useParams();
  console.log('Email:', userEmail);

  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail) {
          const response = await axios.get(`http://localhost:8000/abc/findone/${userEmail}`);
          const user = response.data.data;
          setUserData(user);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [userEmail]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const updatedData = {
        ...userData,
        email: email,
        password: password,
      };

      const response = await axios.put(`http://localhost:8000/abc/update/${userEmail}`, updatedData);

      console.log(response.data);

      window.alert("User updated successfully")

      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error updating user:', error.response);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div style={{backgroundImage : `url(${require('../loginBG.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
      <div className="row" style={{width:"95%"}}>
        <div className="col-md-5">
          <center>
            <br />
            <div className="text-center my-3 mx-2" style={{border:"1px solid white",borderRadius:"10px"}}>
              <h2>Update User Information</h2>
              <div>
                <h3>User Data:</h3>
                <p>First Name: {userData.fname}</p>
                <p>Last Name: {userData.lname}</p>
                <p>Email: {userData.email}</p>
                <p>Password: {userData.password}</p>
              </div>
            </div>
          </center>
        </div>

        <div className="col-md-7">
          <div className="container my-3 text-center" style={{backgroundImage : `url(${require('../loginBG.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "fixed",border:"1px solid white",borderRadius:"10px",background:"transparent",backdropFilter:"blur(60px)"}}>
            <h3>Update User Form:</h3>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="fname">First Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="fname"
                  name="fname"
                  value={userData.fname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="lname">Last Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="lname"
                  name="lname"
                  value={userData.lname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>

              <button className="btn btn-success my-2" type="submit" onClick={handleUpdate}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      



    </div>
  );
}

export default Update;





// Old non-working code


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Update() {
//   const { userEmail } = useParams();
//   console.log('Email:', userEmail);

//   const [userData, setUserData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     password: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (userEmail) {
//           console.log('Request received with email:', userEmail);
//           const response = await axios.get(`http://localhost:8000/abc/findone/${userEmail}`);
//           console.log('Data fetched successfully');
//           const user = response.data;
//           console.log(user); // Check the console for user data
//           setUserData(user);
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchData();
//   }, [userEmail]);

//   const handleUpdate = async (event) => {
//     event.preventDefault();

//     try {
//       const updatedData = {
//         ...userData,
//       };

//       const response = await axios.put(`http://localhost:8000/abc/update/${userEmail}`, updatedData);

//       console.log(response.data);

//       // Optionally, you can update the state or show a success message
//     } catch (error) {
//       console.error('Error updating user:', error.response);
//     }
//   };

//   return (
//     <div>
//       <h2>Update User Information</h2>
//       <div>
//         <h3>User Data:</h3>
//         <p>First Name: {userData.fname}</p>
//         <p>Last Name: {userData.lname}</p>
//         <p>Email: {userData.email}</p>
//         <p>Password: {userData.password}</p>
//       </div>

//       <h3>Update User Form:</h3>
//       <form>
//         <label htmlFor="fname">First Name:</label>
//         <input
//           type="text"
//           id="fname"
//           name="fname"
//           value={userData.fname}
//           onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
//         />

//         <label htmlFor="lname">Last Name:</label>
//         <input
//           type="text"
//           id="lname"
//           name="lname"
//           value={userData.lname}
//           onChange={(e) => setUserData({ ...userData, lname: e.target.value })}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           value={userData.password}
//           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//         />


//         <button type="submit" onClick={handleUpdate}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Update;
