import React from "react";
import { Col, Row } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
const allDetails = [
    { id: 1, title: "Address", label: 'A108 Adam Street', labelSec: "New York, NY 535022", icon: <CiLocationOn />},
    { id: 1, title: "Call Us", label: '+1 5589 55488 55', labelSec: "+1 6678 254445 41", icon: <IoCallOutline />},
    { id: 1, title: "Email Us", label: 'info@example.com', labelSec: "contact@example.com", icon: <CiMail />},
    { id: 1, title: "Open Hours", label: 'Monday - Friday', labelSec: "9:00AM - 05:00PM", icon: <CiStopwatch />}
];


function Details() {
    return (
        <Row className="gy-4">
            {allDetails.map((address) => (
                <Col key={address.id} md={6}>
                <div className="info-item">
                    {address.icon}
                    <h3>{address.title}</h3>
                    <p className="mb-0">{address.label}</p>
                    <p className="mb-0">{address.labelSec}</p>
                </div>
            </Col>
            ))}
        </Row>
    )
}

export default Details;