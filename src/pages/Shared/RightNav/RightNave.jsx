import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNave = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-3" variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login with GitHub
      </Button>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-5">
        <QZone></QZone>
      </div>
      <div className="mt-5">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNave;
