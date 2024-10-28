import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Thirdyrfirst() {


    const [validated, setValidated] = useState(false);

    const [ROLL, setROLL] = useState();
    const [NAME, setNAME] = useState("");
    const [DBMS, setDBMS] = useState();
    const [SPOS, setSPOS] = useState();
    const [CNS, setCNS] = useState();
    const [TOC, setTOC] = useState();
    const [SPM, setSPM] = useState();
    const [percent, setPercent] = useState();
   
  
    useEffect(() => {
  
      const totalMarks = DBMS + SPOS + CNS + TOC + SPM;
      const totalPossibleMarks = 500;
      const calculatedPercent = (totalMarks / totalPossibleMarks) * 100;
      const roundedPercent = calculatedPercent.toFixed(2);
      setPercent(roundedPercent);
      
   }, [DBMS,SPOS,CNS,TOC,SPM]);
  
  
  
  
    const handleSubmit = (event) => {
      const setData = {
      ROLL:ROLL,
      NAME:NAME,
     DBMS:DBMS,
     SPOS:SPOS,
     CNS:CNS,
     TOC:TOC,
     SPM:SPM,
       percent:percent
      };
      
    
      axios.post("http://localhost:8000/abc/thirdYearfirst", setData)
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
<h1>THIRD YEAR : FIRST SEMESTER RESULT</h1></center>
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
            <Form.Label>DBMS:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={DBMS}
              onChange={(e) => setDBMS(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>SPOS:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={SPOS}
              onChange={(e) => setSPOS(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>CNS:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter marks"
                maxLength={100}
                aria-describedby="inputGroupPrepend"
                required
                value={CNS}
                onChange={(e) => setCNS(parseFloat(e.target.value) || 0)} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
           
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>TOC:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              maxLength={100}
              value={TOC}
              onChange={(e) => setTOC(parseFloat(e.target.value) || 0)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>SPM:</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Enter marks"
              value={SPM}
              onChange={(e) => setSPM(parseFloat(e.target.value) || 0)} 
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
      <Button type="submit" > <Link to="/AdTEfirst" style={{color:"white"}}>Show marks</Link></Button></center>
    </div>



    </div>
  )
}

export default Thirdyrfirst
