import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
          <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
        </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>{" "}
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text............... I can be a React component, multiple React
          components, or just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
