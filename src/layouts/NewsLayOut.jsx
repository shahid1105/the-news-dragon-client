import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNave from "../pages/Shared/RightNav/RightNave";

const NewsLayOut = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNave></RightNave>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayOut;
