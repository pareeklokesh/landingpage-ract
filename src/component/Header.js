import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props){
    const [isSticky, setSticky] = useState(false);
    useEffect(()=> {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setSticky(scrollPosition > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    });
    return(
        <>
        <Navbar expand="lg" className={`position-fixed top-0 start-0 w-100 header ${props.staticClass} ${isSticky ? 'sticky' : ''}`} style={{zIndex:"99"}}>
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="#" className="logo d-flex"><h1>Append</h1><span>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navmenu">
                    
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/team">Team</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/career">Career</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link className="btn-getstarted">Get Started</Nav.Link>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;