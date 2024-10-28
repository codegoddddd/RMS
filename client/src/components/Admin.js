import React, { useState, useEffect } from 'react';
// import './Admin.css';

function Admin() {
    const [jsonData, setJsonData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [topper, setTopper] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedFile) return; // Do not proceed without a selected file

        const reader = new FileReader();

        reader.onload = async (event) => {
          const data = JSON.parse(event.target.result);
          setJsonData(data);

          // Find the topper
          const topperStudent = findTopper(data);
          setTopper(topperStudent);
        };

        reader.readAsText(selectedFile);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    };

    fetchData();
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const findTopper = (students) => {
    let maxPercentage = 0;
    let topperStudent = null;

    students.forEach((student) => {
      const { FDS, CG, DELD, DM, OOP } = student;
      const totalMarks = FDS + CG + DELD + DM + OOP;
      const percentage = (totalMarks / 500) * 100;

      if (percentage > maxPercentage) {
        maxPercentage = percentage;
        topperStudent = {
          id: student.id,
          name: student.name,
          percentage: percentage.toFixed(2),
        };
      }
    });

    return topperStudent;
  };

  const isFail = (ab) => {
    // Check if any subject has a score below 40
    return ab.FDS < 40 || ab.CG < 40 || ab.DELD < 40 || ab.OOP < 40 || ab.DM < 40;
  };


  return (
    <div style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
      <br /><br />

        <ul className="nav justify-content-center nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Admintable1">Show Users</a>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
                <a className="nav-link active" href="/Admintable2">Manual result analysis</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Separated link</a></li>
                </ul>
            </li> */}
        </ul>

        <br /><br /><br /><br />
        <h2 className='text-center'>Welcome back, Admin!</h2>
        <br /><br /><br /><br />


        <div className="myclass text-center">
      <h5>Upload result file of student:</h5>
            <br />
      <center>
      <div style={{backgroundColor:"whitesmoke",width:"400px"}}>
        <input className="form-control"
          type="file"
          id="fileInput"
          accept=".json"
          onChange={handleFileChange}
        />
      </div>
      <br /><br />
      </center>

      {topper && (
        <div>
          <h2>Topper Details:</h2>
          <center>
            <table className="table table-sttriped" style={{border:"2px solid black",width:"300px",backgroundColor:"antiquewhite"}}>
            <tr className="table-primary">
              <td>Roll: </td>
              <td>{topper.id}</td>
            </tr>
            <tr className="table-primary">
              <td>Name:</td>
              <td>{topper.name}</td>
            </tr>
            <tr className="table-primary">
              <td>Percentage:</td>
              <td>{topper.percentage}%</td>
            </tr>
         </table> 
         </center>
        </div>
      )}

      <div>
        <h2>Result of students:</h2>
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th>Roll</th>
              <th>Name</th>
              <th>FDS</th>
              <th>CG</th>
              <th>DELD</th>
              <th>DM</th>
              <th>OOP</th>
              <th>Percentage</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item, index) => {
              const { id, name, FDS, CG, DELD, DM, OOP } = item;
              const totalMarks = FDS + CG + DELD + DM + OOP;
              const percentage = (totalMarks / 500) * 100;

              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{FDS}</td>
                  <td>{CG}</td>
                  <td>{DELD}</td>
                  <td>{DM}</td>
                  <td>{OOP}</td>
                  <td>{percentage.toFixed(2)}%</td>
                  <td>{isFail(item) ? 'Fail' : 'Pass'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}


export default Admin
