import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function AdSEsecond() {

    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get("https://rms-inky.vercel.app/abc/secondyear2marks")
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
    axios.delete(`https://rms-inky.vercel.app/abc/deletestudentSE2/${ROLL}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
    }
    
  return (
    <div>
      <h2 className="display-6"><b>SE second sem-Student Performance Report</b></h2>

      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>NAME</th>
            <th>ROLL</th>
            <th>DSA</th>
            <th>SE</th>
            <th>PPL</th>
            <th>MP</th>
            <th>MIII</th>
            <th>PERCENT</th>
            <th style={{width:"15%"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((ab, index) => (
            <tr key={index}>
              <td>{ab.NAME}</td>
              <td>{ab.ROLL}</td>
              <td>{ab.DSA}</td>
              <td>{ab.SE}</td>
              <td>{ab.PPL}</td>
              <td>{ab.MP}</td>
              <td>{ab.MII}</td>
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

export default AdSEsecond
