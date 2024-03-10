import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Careerjson from "../component/json/Careerjson.json";

export default function Career() {
    const [search, setSearch] = useState('');
    const [searchresult, setSearchresult] = useState();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const jobSearch = () => {
        if(search.length > 2) {
        const filterData = Careerjson.filter((getDatajob) =>
            getDatajob.position.toLowerCase().includes(search.toLowerCase())
        );
        setSearchresult(filterData);
    }
}
    return (
        <>
            <Header staticClass="sticky" />

            <Container fluid className="pt-5 mt-5 sectin-space">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10" xl="8">
                            <h1 className="carrer-main-title text-center fw-bold pt-5 mt-3">Discover exciting career
                                <span className="primary-color"> opportunities</span> at
                                <br /><span className="position-relative" style={{ color: '#e84545' }}>
                                    Append
                                    <span class="position-absolute top-50 start-50 ms-3 translate-middle z-index-n1 mt-n1 d-none d-lg-block">
                                        <svg width="300" height="130" viewBox="0 0 250 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M214 6.5H5V81H214V6.5Z" stroke="#000" stroke-width="2"></path>
                                            <path class="fill-mode" d="M209 0H219V10H209V0Z"></path>
                                            <path class="fill-mode" d="M209 77H219V87H209V77Z"></path>
                                            <path class="fill-mode" d="M0 0H10V10H0V0Z"></path>
                                            <path class="fill-mode" d="M0 75H10V85H0V75Z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </h1>
                            <p className="text-center mt-5 px-0 px-md-5">Join our team of digital pioneers, where creativity meets innovation. Explore exciting career opportunities at Mizzle and be part of shaping the digital future.</p>

                            <div className="bg-light border rounded-3 position-relative px-4 py-3 mt-5">
                                <Form className="row g-3 justify-content-center align-items-center jobSearch-form">
                                    <Col lg="5">
                                        <div className="position-relative">
                                            <Form.Control
                                                onChange={handleChange}
                                                type="text"
                                                className="me-1 ps-5 form-control-lg"
                                                placeholder="Job title"
                                            />
                                            <MdOutlineEmail className="position-absolute top-50 start-0 translate-middle ms-4" />
                                        </div>
                                    </Col>
                                    <Col lg="5">
                                        <div className="position-relative">
                                            <Form.Select className="me-1 ps-5 form-control-lg">
                                                <option>Location</option>
                                                <option>Canada</option>
                                                <option>USA</option>
                                                <option>Paris</option>
                                                <option>India</option>
                                                <option>London</option>
                                            </Form.Select>
                                            <CiLocationOn className="position-absolute top-50 start-0 translate-middle ms-4" />
                                        </div>
                                    </Col>
                                    <Col lg="2" className="d-grid">
                                        <Button className="btn btn-dark mb-0" onClick={jobSearch}>
                                            <IoSearch /><br />Search</Button>
                                    </Col>

                                </Form>
                            </div>

                            <ListGroup as="ul" horizontal className="d-flex justify-content-center mt-2">
                                <ListGroup.Item as="li" className="border-0 px-1">
                                    <span className="opacity-50">Suggestion: </span>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 px-1"> Web design,</ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 px-1"> Digital Marketing, ,</ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 px-1"> UI/UX design,</ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 px-1"> Web development</ListGroup.Item>
                            </ListGroup>

                            {searchresult && searchresult.length > 0 ? (
                                searchresult.map((getdatacareer, index) => (
                                    <div key={index.id} className="card card-body bg-light d-md-flex justify-content-md-between align-items-md-center flex-md-row p-4 mb-3 mt-4">
                                        <div className="mb-4 mb-md-0">
                                            <div className="badge text-bg-dark mb-3">
                                                {getdatacareer.category}
                                            </div>
                                            <h5 className="fw-bold mt-2 pb-1">{getdatacareer.position}</h5>
                                            <div className="hstack gap-3 gap-sm-4 flex-wrap mt-3 opacity-50">
                                                <span><CiLocationOn className="me-2" /> {getdatacareer.location}</span>
                                                <span><MdOutlineWatchLater className="me-2" /> {getdatacareer.jobtype}</span>
                                                <span><IoBriefcaseOutline className="me-2" /> {getdatacareer.salary}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Button className="btn btn-primary mb-0 primary-btn">Apply now <FaArrowRightLong className="ms-1" /></Button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center mt-4">No Data Found</p>
                            )}




                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer />
        </>
    )
}