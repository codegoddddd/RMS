import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Thirdyrsecond() {

    const [validated, setValidated] = useState(false);

    const [ROLL, setROLL] = useState();
    const [NAME, setNAME] = useState("");
    const [DS, setDS] = useState();
    const [WT, setWT] = useState();
    const [AI, setAI] = useState();
    const [CC, setCC] = useState();
    const [INTERN, setINTERN] = useState();
    const [percent, setPercent] = useState();
   
  
    useEffect(() => {
  
      const totalMarks = DS + WT + AI + CC + INTERN;
      const totalPossibleMarks = 500;
      const calculatedPercent = (totalMarks / totalPossibleMarks) * 100;
      const roundedPercent = calculatedPercent.toFixed(2);
      setPercent(roundedPercent);
      
   }, [ DS,WT,AI,CC,INTERN]);
  
  
  
  
    const handleSubmit = (event) => {
      const setData = {
      ROLL:ROLL,
      NAME:NAME,
     DS:DS,
     WT:WT,
     AI:AI,
     CC:CC,
     INTERN:INTERN,
       percent:percent
      };
      
    
  
      
      
      axios.post("https://rms-inky.vercel.app/abc/thirdYear2", setData)
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
<h1>THIRD YEAR : SECOND SEMESTER RESULT</h1></center>
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
            <Form.Label>DS:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={DS}
              onChange={(e) => setDS(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>WT:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={WT}
              onChange={(e) => setWT(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>AI:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter marks"
                maxLength={100}
                aria-describedby="inputGroupPrepend"
                required
                value={AI}
                onChange={(e) => setAI(parseFloat(e.target.value) || 0)} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
           
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>CC:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={CC}
              onChange={(e) => setCC(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>INTERNSHIP:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              value={INTERN}
              onChange={(e) => setINTERN(parseFloat(e.target.value) || 0)} 
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
      <Button type="submit" > <Link to="/AdTEsecond" style={{color:"white"}}>Show marks</Link></Button></center>
    </div>

    </div>
  )
}

export default Thirdyrsecond
