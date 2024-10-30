import React from 'react'
import { Link } from 'react-router-dom'
import slide1 from '../sl1.jpeg'
import slide2 from '../sl2.jpeg'
import slide3 from '../sl3.jpeg'
import avcoeBg from '../avcoe.jpg'
import features from '../features.png'

function About() {
  return (
    <div style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h3 className="display-5">About Us</h3>
                        <h2 className='display-6'>Empowers students and teachers with real-time access to academic performance</h2>
                        <p className="display-6">The all-in-one platform to add, update, and analyze student results</p>
                        <Link to="/Login" className="btn btn-success my-2">Get Started</Link>
                    </div>
                </div>
                <div className="col-md-6" >
                <div id="carouselExampleCaptions" className="carousel slide" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt=".1."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light">User-Friendly Interface</h5>
                            <p className="text-light" >Intuitive design for a seamless user experience, Easy navigation and accessibility for users at all levels of expertise.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={slide2} className="d-block w-100 h-75" alt=".2."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark">Real-Time Reports</h5>
                            <p className="text-dark">Instant access to up-to-the-minute insights, Real-time reporting ensures that users are informed promptly.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={slide3} className="d-block w-100 h-75" alt=".3."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark">Update and Delete Allowance</h5>
                            <p className="text-dark">Empower users with the ability to update and delete data as needed, Enhance flexibility and control over the result analysis process.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div>
            <br /><br />
            <div className="row my-3">
                <div className="col-md-6">
                    <div className="card">
                        <img src={avcoeBg} className="card-img-top" alt="..."/>
                        <div className="card-body text-center  text-light" style={{background:"#313e57"}}>
                            <h5 className="card-title fs-3">Welcome to Amrutvahini College</h5>
                            <p className="card-text">Established in 1985, Amrutvahini College is a premier institution dedicated to academic excellence and holistic student development. Our mission is to nurture aspiring minds, fostering a learning environment that encourages innovation, critical thinking, and ethical leadership.</p>
                            <a href="https://www.avcoe.org/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">

                <div className="card my-3 text-center text-light" style={{background:"#1c2331"}}>
                    <h4>Vision</h4>
                    <p>To serve the needs of society through competent technical education, promoting Industry-Institute Interaction and develop competent and cultured computer Engineers.</p>
                </div>

                <div className="card my-3 text-center text-light" style={{background:"#1c2331"}}>
                    <h4>Mission</h4>
                    <p >
                        <ul>
                        <li>M1: The Mission of computer Engineering Department is to effectively develop and channelize creative talents of students to face challenges posed by ever- changing computing industry with enhancement in Industry-Institute interaction.</li>
                        <li>M2: We, the faculty & the staff of Computer Engineering department commit ourselves to inculcate good moral values and shape a strong academic background of the pupil so important to work towards the betterment of the society as able technocrats & responsible citizens.</li>
                        </ul>
                    </p>
                </div>
                </div>
            </div>

            <div className="row" style={{width:"95%"}}>
                <div className="col-md-3">
                    <img src={features} className="card-img mt-3" alt="..." />
                </div>
                <div className="col-md-9">
                    <h3 className="hs-4">What Sets Us Apart</h3>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" >
                            <h2 className="accordion-header">
                            <button style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Precision Analytics
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                                <ul>
                                    <li>Benefit from meticulous result analysis processes designed for accuracy.</li>
                                    <li>Our precision analytics ensure reliable and trustworthy insights for informed decision-making.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Customized Solutions
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                                <ul>
                                    <li>Tailored result analysis services that address the unique needs of your industry or project.</li>
                                    <li>Enjoy the flexibility of solutions designed specifically for your organization's challenges and goals.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Real-time Reporting
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                                <ul>
                                    <li>Stay ahead in a fast-paced environment with our real-time reporting capabilities.</li>
                                    <li>Receive timely insights, empowering you to make swift and effective decisions based on the latest data.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Interdisciplinary Expertise
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                                <ul>
                                    <li>Access a team of experts from diverse backgrounds, including statisticians, data scientists, and industry specialists.</li>
                                    <li>Our interdisciplinary approach ensures a comprehensive understanding of your data, enhancing the depth of our result analysis.</li>
                                </ul>
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

export default About
