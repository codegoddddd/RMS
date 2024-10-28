import React from 'react'

function Admintable2() {
  return (
    <div style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
      <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link text-secondary" href="/Admin">Go back</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">SE</a>
                <ul className="dropdown-menu" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                <li><a className="dropdown-item" href="/Secondyrfirst">First sem</a></li>
                <li><a className="dropdown-item" href="/Secondyrsecond">Second sem</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">TE</a>
                <ul className="dropdown-menu" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                <li><a className="dropdown-item" href="/Thirdyrfirst">First sem</a></li>
                <li><a className="dropdown-item" href="/Thirdyrsecond">Second sem</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">BE</a>
                <ul className="dropdown-menu" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
                <li><a className="dropdown-item" href="/WIP">First sem</a></li>
                <li><a className="dropdown-item" href="/WIP">Second sem</a></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Admintable2
