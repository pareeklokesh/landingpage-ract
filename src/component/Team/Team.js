import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamData from "./TeamData.json";
import Image from "react-bootstrap/Image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Team(){
    const fetchTeamData = TeamData.map((team) => {
        try {
            return (
                <Col key={team.id} lg={4} md={6} className="member position-relative">
                    <div className="member-img">
                        <Image src={team.memberImg} alt={`Team member ${team.id}`} className="img-fluid" />
                        <div className="social">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="member-info text-center">
                        <h4>{team.name}</h4>
                        <span>{team.position}</span>
                        <p>{team.des}</p>
                    </div>
                </Col>
            )
        } catch {}
    })
    return(
        <>
        <Container fluid className="team sectin-space">
            <Container className="section-title">
                <h2>Team</h2>
                <p className="mb-0">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Row className="gy-5">
                    {fetchTeamData}

                </Row>
            </Container>
        </Container>
        </>
    )
}