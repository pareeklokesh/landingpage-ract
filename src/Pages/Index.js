import React from "react";
import Banner from "../component/banner/Banner";
import Header from "../component/Header";
import Clients from "../component/clients/Clients";
import { Col, Container, Form, Row } from "react-bootstrap";
import Statsimg from "../assets/img/stats-bg.jpg"
import Image from "react-bootstrap/Image";
import Team from "../component/Team/Team";
import CallToAction from "../component/CallToAction";
import Testimonials from "../component/testimonials/Testimonials";
import Details from "../component/Details";
import CustomForm from "../component/Form";
import Footer from "../component/Footer";
import BannerImg from "../assets/img/hero-bg.jpg";

function Index(){
    const statsData = [
        { id: 1, value: 232, label: 'Clients' },
        { id: 2, value: 521, label: 'Projects' },
        { id: 3, value: 1453, label: 'Hours Of Support' },
        { id: 4, value: 32, label: 'Workers' },
      ];
    return(
        <>
        <Header />
        <Banner title="Welcome to Our Website" image={BannerImg} />
        <Clients />
        <Container fluid className="position-relative stats px-0">
            <Image src={Statsimg} className="position-absolute top-0 bottom-0 w-100 h-100 object-fit-cover" />
            <Container>
                <Row>
                    {statsData.map((stat) => (
                        <Col key={stat.id} lg={3} md={6}>
                        <div className="stats-item text-center w-100 h-100">
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    </Col>

                    ))}
                </Row>
            </Container>
        </Container>
        <Team />
        <CallToAction />
        <Container fluid className="testimonials sectin-space">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} className="info">
                        <h3>Testimonials</h3>
                        <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p>
                    </Col>
                    <Col lg={7}>
                        <Testimonials />
                    </Col>
                </Row>
        </Container>
        </Container>
        <Container fluid className="sectin-space contact">
            <Container className="section-title">
                <h2>Contact</h2>
                <p className="mb-0">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Row className="gy-4">
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

export default Index;