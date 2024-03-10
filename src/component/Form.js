import React from "react";
import { useState } from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";

function CustomForm() {
    const [formData, setFormData] = useState({
        yourname: "",
        email: "",
        subject: "",
        message: "",
    });
    const { yourname, email, subject, message } = formData;
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(yourname.length < 4) {
            alert("Please enter a name with at least 4 characters");
            return
        }
        else if (!validRegex.test(email)){
            alert("Please enter a valid email address");
            return
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6} className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="yourname" value={yourname} placeholder="Your Name" />
                    </Col>
                    <Col md={6} className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="email" placeholder="Your Email" />
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Control type="text" onChange={handleChange} name="subject" placeholder="Subject" />
                    </Col>
                    <Col md={12}>
                    <Form.Control as="textarea" onChange={handleChange} name="message" rows={6} placeholder="Message" />
                    </Col>
                    <Col md={12} className="text-center mt-4">
                        <Button type="submit" className="text-white">Send Message</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default CustomForm;
