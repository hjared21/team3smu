import React from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export default function HtmlElement() {



  return (<div
  style={{ backgroundColor: '#003366', padding: '10px 0' }}
>
  <Container>
    <Row
      className="align-items-center"
    >
      <Col
        xs="6"
        md="4"
      >
        <Image
          src="https://preview.uxpin.com/external-url"
          alt="x"
          height="50"
        />
      </Col>
      <Col
        xs="6"
        md="8"
      >
        <Nav
          className="justify-content-end"
        >
          <Nav.Link
            href="#home"
            style={{ color: 'white' }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#dashboard"
            style={{ color: 'white' }}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="#profile"
            style={{ color: 'white' }}
          >
            Profile
          </Nav.Link>
          <Nav.Link
            href="#help"
            style={{ color: 'white' }}
          >
            Help
          </Nav.Link>
          <Nav.Link
            href="#logout"
            style={{ color: 'white' }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Col>
    </Row>
  </Container>
</div>);
}