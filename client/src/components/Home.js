import React from 'react'
import sitman from '../main-removebg.png'
import step1 from '../step1.png'
import step2 from '../step2.png'
import step3 from '../step3.png'

function Home() {
  return (
    <div style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
        <div className="card mx-auto" style={{maxWidth: "95%",border:"none",background:"transparent"}}>
        <div className="row no-gutters">
          
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title display-6"><b>Welcome to ScoreCrafters</b></h2>
              <h4 className="display-5">Empowering Insights, Enhancing Results</h4>
              <h5 className="card-text text-light">This is your go-to destination for comprehensive result analysis. Whether you're a student, educator, or institution, our platform provides valuable insights and detailed breakdowns to help you understand and improve performance.</h5>
            </div>
          </div>
          <div className="col-md-4">
            <img src={sitman} className="card-img" alt="..."/>
          </div>
        </div>
        <br />
       <div className="row no-gutters">
          <h3 className="text-center">How It Works:</h3>
          <br /><br />
          <div className="col-md-4 my-2">
            <div className="card text-center bg-dark text-light my-1" style={{height:"100%"}}>
              <img src={step1} className="card-img-top" alt="..."/>
              {/* <i className="bi bi-file-earmark-arrow-up-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-up-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z"/>
              </svg></i> */}
              <div className="card-body">
                <h5 className="card-title">Upload Results:</h5>
                <p className="card-text">Easily upload your examination or assessment results to our secure platform.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center bg-dark text-light my-1" style={{height:"100%"}}>
              <img src={step2} className="card-img-top" alt="..."/>
              {/* <i className="bi bi-clipboard-data"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
              </svg></i> */}
              <div className="card-body">
                <h5 className="card-title">Instant Analysis:</h5>
                <p className="card-text">Our advanced algorithms quickly analyze your results, providing you with instant insights.</p>
              
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center bg-dark text-light my-1" style={{height:"100%"}}>
              <img src={step3} className="card-img-top" alt="..."/>
              {/* <i className="bi bi-brightness-alt-high-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
              </svg></i> */}
              <div className="card-body">
                <h5 className="card-title">Actionable Recommendations:</h5>
                <p className="card-text">Receive actionable recommendations and strategies to enhance your performance based on the analysis.</p>
              
              </div>
            </div>
          </div>
        </div>
        {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      </div>
    </div>
  )
}

export default Home
