import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Secondyrsecond() {

    const [validated, setValidated] = useState(false);

  const [ROLL, setROLL] = useState();
  const [NAME, setNAME] = useState("");
  const [DSA, setDSA] = useState();
  const [SE, setSE] = useState();
  const [PPL, setPPL] = useState();
  const [MP, setMP] = useState();
  const [MII, setMII] = useState();
  const [percent, setPercent] = useState();
 

  useEffect(() => {

    const totalMarks = DSA + SE + PPL + MP + MII;
    const totalPossibleMarks = 500;
    const calculatedPercent = (totalMarks / totalPossibleMarks) * 100;
    const roundedPercent = calculatedPercent.toFixed(2);
    setPercent(roundedPercent);
    
 }, [DSA,SE,PPL,MP,MII]);

console.log('***********************************************',DSA);





  const handleSubmit = (event) => {
    const setData = {
    ROLL:ROLL,
    NAME:NAME,
     DSA:DSA,
     SE:SE,
     PPL:PPL,
     MP:MP,
     MII:MII,
     percent:percent
    };
    
  

    
    
    axios.post("https://rms-inky.vercel.app/abc/secondYear2", setData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setValidated(true);
  };


  return (
    <div>
      <div style={{ border: "4px solid black", padding: "20px", margin: "10px",color:"white",background:"#3D3B40" }}>
    <center><h1><b>WELCOME </b></h1>
    <h4>Marks of student</h4>
<h1>SECOND YEAR : SECOND SEMESTER RESULT</h1></center>
 <div className="my-15" style={{border:"2px solid white",margin:"20px",padding:"20px"}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-10">
        
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
          <Form.Group as={Col} md="12" controlId="validationCustom01" style={{height:"20px"}}>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>DSA:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={DSA}
              onChange={(e) => setDSA(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>SE:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={SE}
              onChange={(e) => setSE(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>PPL:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter marks"
                maxLength={100}
                aria-describedby="inputGroupPrepend"
                required
                value={PPL}
                onChange={(e) => setPPL(parseFloat(e.target.value) || 0)} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
           
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>MP:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={MP}
              onChange={(e) => setMP(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>MIII:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              value={MII}
              onChange={(e) => setMII(parseFloat(e.target.value) || 0)} 
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
      <Button type="submit" > <Link to="/AdSEsecond" style={{color:"white"}}>Show marks</Link></Button></center>
    </div>

    </div>
  )
}

export default Secondyrsecond
