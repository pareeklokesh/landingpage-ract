import React from "react";
import Header from "../component/Header";
import Banner from "../component/banner/Banner";
import Footer from "../component/Footer";
import CustomForm from "../component/Form";
import { Col, Container, Row } from "react-bootstrap";
import Details from "../component/Details";
import Team from "../component/Team/Team";
import BannerImg from "../assets/img/teambanner.jpg";

export default function TeamMember() {
    return (
        <>
        <Header />
        <Banner title="Team Member" image={BannerImg} />
        <Team />
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