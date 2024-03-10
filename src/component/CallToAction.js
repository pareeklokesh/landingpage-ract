import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import CtaImg from "../assets/img/cta-bg.jpg"

export default function CallToAction(){
    return(
        <>
        
        <Container fluid className="call-to-action">
            <Image src={CtaImg} />
            <Container>
                <Row className="justify-content-center">
                    <Col xl={10}>
                        <div className="text-center">
                            <h3>Call To Action</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" className="cta-btn">Call To Action</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}