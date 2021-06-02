import React from 'react'
import Navbar from 'react-bootstrap/navbar'
import logo from '../img/csslogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
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
                    CSS Text Manipulator
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default NavBar
