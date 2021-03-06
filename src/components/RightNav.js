import React from "react";

import Navbar from "react-bootstrap/Navbar";

export default function RightNav(props) {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        className="d-flex justify-content-start rightNav"
      >
        <Navbar.Brand className="d-flex mr-auto">
          {props.roomName}
        </Navbar.Brand>
        <div className="username">{props.username}</div>
        <i
          className="fas fa-info-circle icon"
          onClick={props.changeDetails}
        ></i>
      </Navbar>
    </>
  );
}
