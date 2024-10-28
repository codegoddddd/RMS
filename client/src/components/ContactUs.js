import React from 'react'
// import { Link } from 'react-router-dom'


function ContactUs() {
  return (
    <div style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
        <div className="container" style={{backgroundImage : `url(${require('../contact.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "scroll",border:"1px solid black",borderRadius:"10px"}}>
            <br />
            <h2 className="text-center  fs-1">Get in touch with us</h2>
            <div className="row">
                <div className="col-md-4 text-center my-3">
                        <div className="card-body text-dark">
                            <i data-feather="mail"></i>
                            <h5 className="card-title fs-2 mx-2"><span class="material-symbols-outlined">call</span>Let's Talk</h5>
                            <p className="card-text fs-5 text-secondary">+91 1234567890</p>
                            <h5 className="card-title fs-2 mx-2"><span class="material-symbols-outlined">mail</span>Mail</h5>
                            <p className="card-text fs-5 text-secondary">scorecrafters@gmail.com</p>
                            <h5 className="card-title fs-2 mx-2"><span class="material-symbols-outlined">location_on</span>Address</h5>
                            <p className="card-text fs-5 text-secondary">AVCOE,Ghulewadi,Sangamner</p>
                        </div>
                </div>
                <div className="col-md-8 my-2">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Phone No</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="+91 XXXXX XXXXX"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput3" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br /><br />
                    {/* <!-- Button trigger modal --> */}
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Send Message
                        </button>
                        <br /><br />
                    </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        {/* <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body">
                            Message sent
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
