import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function AdTEsecond() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get("https://rms-inky.vercel.app/abc/thirdyear2marks")
        .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data.userdata);
        })
        .catch(err => {
        console.log(err);
        });
    }, []);

    function handledelete(ROLL){
    axios.delete(`https://rms-inky.vercel.app/abc/deletestudentTE2/${ROLL}`)
    .then(res => {
        console.log(res.data);

        setData(prevData => prevData.filter(student => student.ROLL !== ROLL));
    })
    .catch(err => {
        console.log(err);
    });
    }

  return (
    <div>
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
            <th style={{width:"15%"}}>Action</th>
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
                <td>
                  <Link className="btn btn-outline-success btn-sm mx-1" to="/">Update</Link>
                  <button 
                  className="btn btn-outline-danger btn-sm mx-1"
                  onClick={()=>{handledelete(ab.ROLL)}}>
                      Delete
                  </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default AdTEsecond
