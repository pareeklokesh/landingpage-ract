import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    const UsefulLinks = ["Home", "About us", "Services", "Terms of service", "Privacy policy"];
    const OurServices = ["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"];
    return(
        <>
        <footer className="container-fluid footer">
            <Container className="footer-top">
                <Row className="gy-4">
                    <Col lg={5} md={12} className="footer-about">
                        <Link to="/" className="logo mb-1">
                            <span className="d-block">Append</span>
                        </Link>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className="social-links d-flex mt-4">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </Col>
                    <Col lg={2} xs={6} className="footer-links">
                        <h4>Useful Links</h4>
                            <ListGroup as="ul">
                        {UsefulLinks.map((uselink, index) => (
                            <ListGroup.Item key={index} as="li">
                                {index === 0 ? (
                                    <Link to="/" exact>{uselink}</Link>
                                ) : index === 1 ? (
                                    <Link to="/about" exact>{uselink}</Link>
                                ) :
                                (
                                    <Link to={`/${uselink.toLocaleLowerCase()}`}>{uselink}</Link>
                                )}
                                
                                
                        </ListGroup.Item>
                        ))}
                    </ListGroup>
                        
                    </Col>
                    <Col lg={2} xs={6} className="footer-links">
                        <h4>Our Services</h4>
                            <ListGroup as="ul">
                        {OurServices.map((uselink, index) => (
                            <ListGroup.Item key={index} as="li">
                                <Link to={`/${uselink.toLocaleLowerCase()}`}>{uselink}</Link>
                        </ListGroup.Item>
                        ))}
                    </ListGroup>
                        
                    </Col>
                    <Col lg={3} col={12} className="footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p className="mb-0">A108 Adam Street</p>
                        <p className="mb-0">New York, NY 535022</p>
                        <p className="mb-0">United States</p>
                        <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                        <p><strong>Email:</strong> <span>info@example.com</span></p>
                    </Col>

                </Row>
            </Container>
            <Container className="copyright text-center mt-4">
            <p className="mb-0">© <span>Copyright</span> <strong class="px-1">Append</strong> <span>All Rights Reserved</span></p>
            </Container>
        </footer>
        </>
    )
}
