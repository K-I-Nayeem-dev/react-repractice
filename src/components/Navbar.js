import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Navbar(props) {
    let color = { color: props.darkMode === 'light'? 'black' : 'white' };
    const [webColor, setwebColor] = useState('white')

    const webbColor = (event)=>{
        // console.log(event.target.value);
        if(webColor === 'white'){
            document.body.style.backgroundColor = event.target.value;
        }
        else{
            setwebColor('white')
        }
    }   

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
            <div className="container">
                <a  className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mE-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{props.link}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{props.about}</a>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
                <div className="form-check form-switch d-flex align-items-center me-2">
                    <input className='me-2' onChange={webbColor} type="color"/>
                    <label style={color} className="form-check-label">Change Website Color</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label style={color} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                </div>
            </div>
            </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string,
    home: PropTypes.string,
    link: PropTypes.string,
    about: PropTypes.string,
}

// Navbar.defaultProps = {
//     title: 'deTitle',
//     home: 'deHOme',
//     link: 'deLInk',
//     about: 'deAbout',
// }

export default Navbar
