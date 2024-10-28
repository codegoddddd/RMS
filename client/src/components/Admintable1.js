import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Admintable1() {
    const [data, setData] = useState({ userdata: [] });

    // const navigate=useNavigate()

    useEffect(() => {
      axios.get("http://localhost:8000/abc/findall")
        .then(res => {
          console.log(res.data);
          setData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

    function handledelete(email){
      axios.delete(`http://localhost:8000/abc/delete/${email}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  
    console.log("Data:", data);
  
    return (
      <div>
        <div className="text-center">
          <h2 className="display-6" style={{display:"inline-block"}}>Users Info</h2>
          <h3 className="display-6 text-warning" style={{display:"inline-block"}}>(Confidential)</h3>
        </div>
        
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.userdata && data.userdata.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Link to={`/Update/${user.email}`} className="btn btn-outline-success">
                    Update
                  </Link>
                </td>
                <td>
                  <button className="btn btn-outline-danger" onClick={()=>{handledelete(user.email)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Admintable1
