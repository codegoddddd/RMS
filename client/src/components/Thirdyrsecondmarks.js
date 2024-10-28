// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// // function Thirdyrsecondmarks() {
// //   const [data, setData] = useState([]);
// //   const [toppers, setToppers] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:8000/abc/thirdyear2marks")
// //       .then((res) => {
// //         console.log(res);
// //         console.log(res.data);
// //         setData(res.data.userdata3);

// //         // Find and set the toppers
// //         const sortedData = [...res.data.userdata3].sort((a, b) => b.percent - a.percent);
// //         setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
// //       })
// //       .catch(err => {
// //         console.log(err);
// //       });
// //   }, []);

// //   const isFail = (ab) => {
// //     // Check if any subject has a score below 40
// //     return ab.DS < 40 || ab.WT < 40 || ab.AI < 40 || ab.CC < 40 || ab.INTERN < 40;
// //   };

// //   return (
// //     <div className="text-center" style={{backgroundColor:"antiquewhite"}}>
// //       <h2 className="display-6"><b>Topper Information</b></h2>
// //       <center>
// //       <table className="table table-striped" style={{width:"500px"}}>
// //         <thead>
// //           <tr className="table-primary">
// //             <th>SrNo</th>
// //             <th>NAME</th>
// //             <th>PERCENT</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {
// //             toppers.map((topper,index)=>(
              
// //               <tr key={index}>
// //                 <td>{index+1}</td>
// //                 <td>{topper.NAME}</td>
// //                 <td>{topper.percent}</td>
// //               </tr>
// //             ))
// //           }
// //         </tbody>
// //       </table>
// //       </center>

// //       <h2 className="display-6"><b>TE second sem-Student Performance Report</b></h2>

// //       <table className="table table-striped">
// //         <thead>
// //           <tr className="table-primary">
// //             <th>NAME</th>
// //             <th>ROLL</th>
// //             <th>DS</th>
// //             <th>WT</th>
// //             <th>AI</th>
// //             <th>CC</th>
// //             <th>INTERN</th>
// //             <th>PERCENT</th>
// //             <th>RESULT</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((ab, index) => (
// //             <tr key={index}>
// //               <td>{ab.NAME}</td>
// //               <td>{ab.ROLL}</td>
// //               <td>{ab.DS}</td>
// //               <td>{ab.WT}</td>
// //               <td>{ab.AI}</td>
// //               <td>{ab.CC}</td>
// //               <td>{ab.INTERN}</td>
// //               <td>{ab.percent}</td>
// //               <td>{isFail(ab) ? 'Fail' : 'Pass'}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <center>
// //       <Link className="btn btn-success" to="/Recom">Let's Improve</Link>
// //       </center>
// //     </div>
// //   );
// // }

// // export default Thirdyrsecondmarks;






import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

function Thirdyrsecondmarks() {
  const [data, setData] = useState([]);
  const [toppers, setToppers] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:8000/abc/thirdyear2marks")
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
    return ab.DS < 40 || ab.WT < 40 || ab.AI < 40 || ab.CC < 40 || ab.INTERN < 40;
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

  useEffect(() => {
    createBarChart();
  }, [toppers, createBarChart]);

  return (
    <div className="text-center" style={{ backgroundColor: "antiquewhite" }}>
      <h2 className="display-6"><b>Topper Information</b></h2>
      <br />
      <center>
        <div className="row" style={{width:"95%"}}>
          <div className="col-md-8">
          <table className="table table-striped" style={{ width: "500px" }}>
          <thead>
            <tr className="table-primary">
              <th>SrNo</th>
              <th>NAME</th>
              <th>PERCENT</th>
            </tr>
          </thead>
          <tbody>
            {
              toppers.map((topper, index) => (

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{topper.NAME}</td>
                  <td>{topper.percent}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
          </div>
          <div className="col-md-4">
              {/* Canvas for the chart */}
      <div style={{ height: "200px", width: "30%" }}>
        <canvas id="myBarChart" ref={chartRef} width={100} height={50}></canvas>
      </div>
          </div>
        </div>
        
      </center>

      <h2 className="display-6"><b>TE second sem-Student Performance Report</b></h2>

      

      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>DS</th>
            <th>WT</th>
            <th>AI</th>
            <th>CC</th>
            <th>INTERN</th>
            <th>PERCENT</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ab, index) => (
            <tr key={index}>
              <td>{ab.NAME}</td>
              <td>{ab.ROLL}</td>
              <td>{ab.DS}</td>
              <td>{ab.WT}</td>
              <td>{ab.AI}</td>
              <td>{ab.CC}</td>
              <td>{ab.INTERN}</td>
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

export default Thirdyrsecondmarks;














// import axios from 'axios';
// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Chart from 'chart.js/auto';

// function Thirdyrsecondmarks() {
//   const [data, setData] = useState([]);
//   const [toppers, setToppers] = useState([]);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     axios.get("http://localhost:8000/abc/thirdyear2marks")
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//         setData(res.data.userdata3);

//         // Find and set the toppers
//         const sortedData = [...res.data.userdata3].sort((a, b) => b.percent - a.percent);
//         setToppers(sortedData.slice(0, 3)); // Assuming you want to display top 3 toppers
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const isFail = (ab) => {
//     // Check if any subject has a score below 40
//     return ab.DS < 40 || ab.WT < 40 || ab.AI < 40 || ab.CC < 40 || ab.INTERN < 40;
//   };

//   const createBarChart = () => {
//     const ctx = chartRef.current;

//     if (!ctx) {
//       console.error('Canvas element not found.');
//       return;
//     }

//     if (ctx.chart) {
//       ctx.chart.destroy();
//     }

//     ctx.chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: toppers.map(topper => topper.NAME),
//         datasets: [{
//           label: 'Percentage',
//           data: toppers.map(topper => topper.percent),
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//           ],
//           borderWidth: 1,
//         }]
//       },
//       options: {
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             display: true, // Hide x-axis
//           },
//           y: {
//             beginAtZero: true,
//             max: 100,
//           },
//         },
//         layout: {
//           padding: {
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//           },
//         },
//       },
//     });
//   };

//   const createPieChart = () => {
//     const pieCtx = document.getElementById("myPieChart");
  
//     if (!pieCtx) {
//       console.error('Canvas element for pie chart not found.');
//       return;
//     }
  
//     // Destroy the previous chart instance with ID '1'
//     Chart.getChart("1")?.destroy();
  
//     const passCount = data.filter(ab => !isFail(ab)).length;
//     const failCount = data.length - passCount;
  
//     const pieChart = new Chart(pieCtx, {
//       type: 'pie',
//       data: {
//         labels: ['Pass', 'Fail'],
//         datasets: [{
//           data: [passCount, failCount],
//           backgroundColor: [
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(255, 99, 132, 0.2)',
//           ],
//           borderColor: [
//             'rgba(75, 192, 192, 1)',
//             'rgba(255, 99, 132, 1)',
//           ],
//           borderWidth: 1,
//         }]
//       },
//       options: {
//         maintainAspectRatio: false,
//       },
//     });
//   };
  

//   useEffect(() => {
//     createBarChart();
//     createPieChart();
//   }, [toppers, data]);

//   return (
//     <div className="text-center" style={{ backgroundColor: "antiquewhite" }}>
//       <h2 className="display-6"><b>Topper Information</b></h2>
//       <center>
//         <table className="table table-striped" style={{ width: "500px" }}>
//           <thead>
//             <tr className="table-primary">
//               <th>SrNo</th>
//               <th>NAME</th>
//               <th>PERCENT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               toppers.map((topper, index) => (

//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{topper.NAME}</td>
//                   <td>{topper.percent}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </center>

//       <h2 className="display-6"><b>TE second sem-Student Performance Report</b></h2>

//       {/* Canvas for the bar chart */}
//       <div style={{ height: "200px", width: "30%" }}>
//         <canvas id="myBarChart" ref={chartRef} width={100} height={50}></canvas>
//       </div>

//       {/* Canvas for the pie chart */}
//       <div style={{ height: "200px", width: "30%" }}>
//         <canvas id="myPieChart" width={100} height={50}></canvas>
//       </div>

//       <table className="table table-striped">
//         <thead>
//           <tr className="table-primary">
//             <th>NAME</th>
//             <th>ROLL</th>
//             <th>DS</th>
//             <th>WT</th>
//             <th>AI</th>
//             <th>CC</th>
//             <th>INTERN</th>
//             <th>PERCENT</th>
//             <th>RESULT</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((ab, index) => (
//             <tr key={index}>
//               <td>{ab.NAME}</td>
//               <td>{ab.ROLL}</td>
//               <td>{ab.DS}</td>
//               <td>{ab.WT}</td>
//               <td>{ab.AI}</td>
//               <td>{ab.CC}</td>
//               <td>{ab.INTERN}</td>
//               <td>{ab.percent}</td>
//               <td>{isFail(ab) ? 'Fail' : 'Pass'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <center>
//         <Link className="btn btn-success" to="/Recom">Let's Improve</Link>
//       </center>
//     </div>
//   );
// }

// export default Thirdyrsecondmarks;
