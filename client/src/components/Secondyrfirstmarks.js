// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Secondyrfirstmarks() {
//   const [data, setData] = useState([]);
//   const [toppers, setToppers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/abc/secondyear1marks")
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//         setData(res.data.userdata);

//         // Find and set the toppers
//         const sortedData = [...res.data.userdata].sort((a, b) => b.percent - a.percent);
//         setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const isFail = (ab) => {
//     // Check if any subject has a score below 40
//     return ab.FDS < 40 || ab.CG < 40 || ab.DELD < 40 || ab.OOP < 40 || ab.DM < 40;
//   };


import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

function Secondyrfirstmarks() {
  const [data, setData] = useState([]);
  const [toppers, setToppers] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:8000/abc/secondyear1marks")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data.userdata);

        // Find and set the toppers
        const sortedData = [...res.data.userdata].sort((a, b) => b.percent - a.percent);
        setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const isFail = (ab) => {
    // Check if any subject has a score below 40
    return ab.FDS < 40 || ab.CG < 40 || ab.DELD < 40 || ab.OOP < 40 || ab.DM < 40;
  };

  const createBarChart = useCallback(() => {
  const ctx = chartRef.current;

  if (!ctx) {
    console.error('Canvas element not found.');
    return;
  }

  if (ctx.chart) {
    ctx.chart.destroy();
  }

  ctx.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: toppers.map(topper => topper.NAME),
      datasets: [{
        label: 'Percentage',
        data: toppers.map(topper => topper.percent),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true, // Hide x-axis
        },
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    },
  });
}, [toppers]);

createBarChart();

  useEffect(() => {
    createBarChart();
  }, [toppers,createBarChart]);



  return (
    <div style={{backgroundColor:"antiquewhite"}}>
      <div className="text-center">
      <h2 className="display-6"><b>Topper Information</b></h2>
      <br />
      <center>
        <div className="row" style={{width:"95%"}}>
          <div className="col-md-8">
          <table className="table table-striped" style={{width:"500px"}}>
            <thead>
              <tr className="table-primary">
                <th>SrNo</th>
                <th>NAME</th>
                <th>PERCENT</th>
              </tr>
            </thead>
            <tbody>
              {
                toppers.map((topper,index)=>(
                  
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{topper.NAME}</td>
                    <td>{topper.percent}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>
          <div className="col-md-4">
          <div style={{height:"200px",width:"30%"}}>
      {/* Canvas for the chart */}
      <canvas id="myBarChart" ref={chartRef} width={100} height={50}></canvas>
      </div>
          </div>
        </div>
      
      </center>
      {/* <ol>
        {toppers.map((topper, index) => (
          <li key={index}>{topper.NAME} - {topper.percent}%</li>
        ))}
      </ol> */}
      </div>
      
      <br />

      <h2 className="display-6 text-center"><b>SE first sem-Student Performance Report</b></h2>

      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>FDS</th>
            <th>CG</th>
            <th>DELD</th>
            <th>OOP</th>
            <th>DM</th>
            <th>PERCENT</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ab, index) => (
            <tr key={index}>
              <td>{ab.NAME}</td>
              <td>{ab.ROLL}</td>
              <td>{ab.FDS}</td>
              <td>{ab.CG}</td>
              <td>{ab.DELD}</td>
              <td>{ab.OOP}</td>
              <td>{ab.DM}</td>
              <td>{ab.percent}</td>
              <td>{isFail(ab) ? 'Fail' : 'Pass'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
      <Link className="btn btn-success" to="/Recom">Let's Improve</Link>
      </center>

      

    </div>
  );
}

export default Secondyrfirstmarks;
