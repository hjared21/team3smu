import React from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export default function HtmlElement() {



  return (<div
  style={{ backgroundColor: '#003366', color: 'white', padding: '15px 0', marginTop: '30px' }}
>
  <Container>
    <Row>
      <Col
        xs="12"
        sm="6"
      >
        <small
        >
          © 2025 Singapore Management University. All Rights Reserved.
        </small>
      </Col>
      <Col
        xs="12"
        sm="6"
        className="text-sm-end"
      >
        <small
        >
          <span
          >
            Professor Portal v2.5 | 
          </span>
          <a
            style={{ color: 'white' }}
            href="#"
          >
            Privacy Policy
          </a>
          <span
          >
             | 
          </span>
          <a
            style={{ color: 'white' }}
            href="#"
          >
            Terms of Use
          </a>
        </small>
      </Col>
    </Row>
  </Container>
</div>);
}