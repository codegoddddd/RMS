import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateSE1() {
  const { studRoll } = useParams();
  console.log('Roll Number:', studRoll);

  const [studentData, setStudentData] = useState({
    NAME: '',
    ROLL: '',
    FDS: 0,
    CG: 0,
    DELD: 0,
    OOP: 0,
    DM: 0,
    percent: 0,
  });

  const [updatedData, setUpdatedData] = useState({
    NAME: '',
    FDS: 0,
    CG: 0,
    DELD: 0,
    OOP: 0,
    DM: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (studRoll) {
          const response = await axios.get(`https://rms-inky.vercel.app/abc/findstudentSE1/${studRoll}`);
          const student = response.data.data;
          setStudentData(student);

          // Set the initial state of updatedData based on the fetched data
          setUpdatedData({
            NAME: student.NAME,
            FDS: student.FDS,
            CG: student.CG,
            DELD: student.DELD,
            OOP: student.OOP,
            DM: student.DM,
          });
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, [studRoll]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: isNaN(value) ? value : parseInt(value, 10),
    }));
  };
  
  

  const handleUpdateMarks = async (event) => {
    event.preventDefault();
  
    try {
      // Validate numeric values
      const numericFields = ['FDS', 'CG', 'DELD', 'OOP', 'DM'];
      for (const field of numericFields) {
        if (isNaN(updatedData[field]) || typeof updatedData[field] !== 'number') {
          console.error(`${field} must be a valid number`);
          return;
        }
      }
  
      // Calculate percent based on the updated data
      const percent = calculatePercent(updatedData);
  
      // Ensure that the updatedData has NAME
      if (!updatedData.NAME) {
        console.error('NAME is missing in updatedData');
        return;
      }
  
      const updatedDataWithRoll = {
        ...updatedData,
        ROLL: studRoll,
        percent: percent,
      };
  
      // Make the PUT request
      const response = await axios.put(`https://rms-inky.vercel.app/abc/updatestudentSE1/${studRoll}`, updatedDataWithRoll);
  
      console.log(response.data);

      window.alert('Data updated successfully'); // Alert
  
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error updating student data:', error.response);
    }
  };
  

  const calculatePercent = (marks) => {
    const numericValues = Object.values(marks).filter((value) => typeof value === 'number');
    
    const totalMarks = numericValues.reduce((acc, curr) => acc + curr, 0);
  
    const totalSubjects = numericValues.length;
    return totalMarks / totalSubjects;
  };
  

  return (
    <div style={{backgroundImage : `url(${require('../loginBG.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
      <h2 className='text-center'>Update Student Information</h2>
      <div className="row" style={{width:"95%"}}>
        <div className="col-md-5">
          <br /><br />
          <div className="text-center my-3 mx-2" style={{border:"1px solid white",borderRadius:"10px"}}>
            <h3>Student Data:</h3>
            <p>Name: {studentData.NAME}</p>
            <p>Roll Number: {studentData.ROLL}</p>
            <p>FDS: {studentData.FDS}</p>
            <p>CG: {studentData.CG}</p>
            <p>DELD: {studentData.DELD}</p>
            <p>OOP: {studentData.OOP}</p>
            <p>DM: {studentData.DM}</p>
            <p>Percent: {studentData.percent}</p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="container my-3 text-center" style={{backgroundImage : `url(${require('../loginBG.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "fixed",border:"1px solid white",borderRadius:"10px",background:"transparent",backdropFilter:"blur(60px)"}}>
            <h3>Update Marks Form:</h3>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="NAME">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="NAME"
                  name="NAME"
                  value={updatedData.NAME}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="FDS">FDS:</label>
                <input
                  className="form-control"
                  type="number"
                  id="FDS"
                  name="FDS"
                  value={updatedData.FDS}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="CG">CG:</label>
                <input
                  className="form-control"
                  type="number"
                  id="CG"
                  name="CG"
                  value={updatedData.CG}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="DELD">DELD:</label>
                <input
                  className="form-control"
                  type="number"
                  id="DELD"
                  name="DELD"
                  value={updatedData.DELD}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="OOP">OOP:</label>
                <input
                  className="form-control"
                  type="number"
                  id="OOP"
                  name="OOP"
                  value={updatedData.OOP}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="DM">DM:</label>
                <input
                  className="form-control"
                  type="number"
                  id="DM"
                  name="DM"
                  value={updatedData.DM}
                  onChange={handleInputChange}
                />
              </div>

              <button className="btn btn-success my-2" type="submit" onClick={handleUpdateMarks}>
                Update Marks
              </button>
            </form>
          </div>
        </div>
      </div>
        

      
    </div>
  );
}

export default UpdateSE1;
