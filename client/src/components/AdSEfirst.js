import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function AdSEfirst() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get("https://rms-inky.vercel.app/abc/secondyear1marks")
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
    axios.delete(`https://rms-inky.vercel.app/abc/deletestudentSE1/${ROLL}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
    }

    return (
        <div>
            <h2 className="display-6 text-center"><b>SE first sem-Student Performance Report</b></h2>

            <table className="table table-striped ">
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
                <th style={{width:"15%"}}>Action</th>
                {/* <th>Action</th> */}
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
                    <td>
                        <Link className="btn btn-outline-success btn-sm mx-1" to={`/UpdateSE1/${ab.ROLL}`}>Update</Link>
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

export default AdSEfirst
