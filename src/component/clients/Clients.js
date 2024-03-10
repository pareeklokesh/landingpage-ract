import React from "react";
import Clientsjson from "./Clientsjson.json"
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function Clients(){
    const clientLogo = Clientsjson.map((client) => {
    try {
        return (
            <Col key={client.id} xl={2} md={3} xs={6} className="client-logo d-flex justify-content-center align-items-center overflow-hidden">
                <Image src={client.img} alt={`Client ${client.id}`} />
            </Col>
        );
    } catch (error) {
        console.error(`Error loading image for client ${client.id}`, error);
        return null;
    }
});


    return(
        <>
        <Container fluid className="clients py-2">
            <Row>
                {clientLogo}
            </Row>
        </Container>
        </>
    )
}