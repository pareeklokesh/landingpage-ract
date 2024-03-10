import React from "react";
import Header from "../component/Header";
import Banner from "../component/banner/Banner";
import Footer from "../component/Footer";
import CustomForm from "../component/Form";
import { Col, Container, Row } from "react-bootstrap";
import Details from "../component/Details";
import bannerImage from "../assets/img/bannercontact.jpg";

export default function Contact() {
    return (
        <>
        <Header />
        <Banner title="Contact us" image={bannerImage} />
        <Container fluid className="sectin-space contact">
            <Container className="section-title">
                <h2>Contact</h2>
                <p className="mb-0">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Row className="">
                    <Col lg={6}>
                        <Details />
                    </Col>
                    <Col lg={6}>
                        <div className="php-email-form">
                        <CustomForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer />
        </>
    )
}