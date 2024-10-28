import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function AdTEfirst() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/abc/thirdyearfirstmarks")
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
    axios.delete(`http://localhost:8000/abc/deletestudentTE1/${ROLL}`)
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
        <h2 className="display-6"><b>TE first sem-Student Performance Report</b></h2>

      

        <table className="table table-striped">
        <thead>
            <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>DBMS</th>
            <th>SPOS</th>
            <th>CNS</th>
            <th>TOC</th>
            <th>SPM</th>
            <th>PERCENT</th>
            <th style={{width:"15%"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map((ab, index) => (
            <tr key={index}>
                <td>{ab.NAME}</td>
                <td>{ab.ROLL}</td>
                <td>{ab.DBMS}</td>
                <td>{ab.SPOS}</td>
                <td>{ab.CNS}</td>
                <td>{ab.TOC}</td>
                <td>{ab.SPM}</td>
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

export default AdTEfirst
