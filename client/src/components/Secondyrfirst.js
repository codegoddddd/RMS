import React from 'react'
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Secondyrfirst() {
  const [validated, setValidated] = useState(false);
  const [FDS, setFDS] = useState();
  const [CG, setCG] = useState();
  const [DELD, setDELD] = useState();
  const [DM, setDM] = useState();
  const [OOP, setOOP] = useState();
  const [percent, setPercent] = useState();
  const [NAME, setNAME] = useState("");
  const [ROLL, setROLL] = useState();

  useEffect(() => {

    const totalMarks = FDS + CG + DELD + OOP + DM;
    const totalPossibleMarks = 500;
    const calculatedPercent = (totalMarks / totalPossibleMarks) * 100;
    const roundedPercent = calculatedPercent.toFixed(2);
    setPercent(roundedPercent);
    
 }, [FDS, CG, DELD, OOP, DM]);

console.log('***********************************************',percent);

  const handleSubmit = (event) => {
    const setData = {
      NAME:NAME,
      ROLL:ROLL,
      FDS:FDS,
      CG:CG,
      DELD:DELD,
      OOP:OOP,
      DM:DM,
      percent:percent
    };
    

    axios.post("https://rms-inky.vercel.app/abc/secondyear1", setData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setValidated(true);
  };



  return (
    <div class="card mx-auto" style={{maxWidth: "95%",border:"none",background:"transparent"}}>
      
        

        <div style={{ border: "4px solid black", padding: "20px", margin: "10px",color:"white",background:"#3D3B40" }}>
    <center><h1><b>WELCOME </b></h1>
    <h4>Marks of student</h4>
<h1>SECOND YEAR : FIRST SEMESTER RESULT</h1></center>
 <div className="my-15" style={{border:"2px solid white",margin:"20px",padding:"20px"}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-10">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter name of student"
              maxLength={100}
              value={NAME}
              onChange={(e) => setNAME(e.target.value)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Roll No:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter roll no. of student"
              maxLength={100}
              value={ROLL}
              onChange={(e) => setROLL(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01" style={{height:"20px"}}>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>FDS:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={FDS}
              onChange={(e) => setFDS(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>CG:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={CG}
              onChange={(e) => setCG(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>DELD:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter marks"
                maxLength={100}
                aria-describedby="inputGroupPrepend"
                required
                value={DELD}
                onChange={(e) => setDELD(parseFloat(e.target.value) || 0)} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
           
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>OOP:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={OOP}
              onChange={(e) => setOOP(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>DM:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              value={DM}
              onChange={(e) => setDM(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
        </Row>
        <br/>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
      <center>
      <Button type="submit" > <Link to="/AdSEfirst" style={{color:"white"}}>Show marks</Link></Button></center>
    
        
      </div>

    </div>
  )
}

export default Secondyrfirst
