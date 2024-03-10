import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import BannerImg from "../../assets/img/hero-bg.jpg"
import Image from 'react-bootstrap/Image';

function Banner(props) {
    return(
        <>
        <Container fluid className="p-0 hero_banner min-vh-100 d-flex align-items-center justify-content-center position-relative">
            <Image src={props.image} fluid className="position-absolute top-0 w-100 start-0 h-100 object-fit-cover" />
            <Container className="position-relative" style={{zIndex:"2"}}>
                <Row>
                    <Col lg={10}>
                        <h2 className="text-white m-0">{props.title}</h2>
                        <p className="mt-1 m-0">We are team of talented designers making websites with Bootstrap</p>
                    </Col>
                    <Col lg={5}>
                        <Form className="sign-up-form d-flex">
                            <Form.Control className="border-0 py-0 shadow-none" type="text" placeholder="Enter email address" />
                            <Button type="submit" variant="primary">Sign up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Banner;