import React, { useState } from 'react'
import Navbar from 'react-bootstrap/navbar'
import logo from '../img/csslogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
    const [inBeta, setInBeta] = useState(true)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    {!inBeta ? "CSS Text Manipulator" : "CSS Text Manipulator Beta"}
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default NavBar
