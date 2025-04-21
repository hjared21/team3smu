import React from 'react';
import { Badge } from 'react-bootstrap';
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { PieChart } from '@mui/x-charts/PieChart';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


export default function UXPinContainer() {

const [visible, setVisible] = React.useState(false);

  return (<Container
  fluid="true"
  style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '0' }}
>
  <div
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
  </div>
  <Container
    style={{ padding: '20px' }}
  >
    <h2
      style={{ color: '#003D7C', marginBottom: '20px', fontWeight: 'bold' }}
    >
      Peer Evaluation Analytics
    </h2>
    <p
      style={{ color: '#666', marginBottom: '30px' }}
    >
      View and analyze peer evaluation data across faculty members and courses.
    </p>
    <Row
      className="mb-4"
    >
      <Col
        md="3"
      >
        <Card
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Body>
            <Card.Title
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#003D7C' }}
            >
              Total Evaluations
            </Card.Title>
            <Card.Text
              style={{ fontSize: '28px', fontWeight: 'bold', color: '#004A99' }}
            >
              124
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md="3"
      >
        <Card
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Body>
            <Card.Title
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#003D7C' }}
            >
              Completed
            </Card.Title>
            <Card.Text
              style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}
            >
              87
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md="3"
      >
        <Card
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Body>
            <Card.Title
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#003D7C' }}
            >
              Pending
            </Card.Title>
            <Card.Text
              style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffc107' }}
            >
              37
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md="3"
      >
        <Card
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Body>
            <Card.Title
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#003D7C' }}
            >
              Completion Rate
            </Card.Title>
            <Card.Text
              style={{ fontSize: '28px', fontWeight: 'bold', color: '#004A99' }}
            >
              70.2%
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col
        lg="6"
      >
        <Card
          style={{ marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003D7C', color: 'white', fontWeight: 'bold' }}
          >
            Evaluations by Professor
          </Card.Header>
          <Card.Body>
            <BarChart
              xAxis={[ { scaleType: 'band', data: [ 'Prof. Smith', 'Prof. Harris', 'Prof. Wong', 'Prof. Chen', 'Prof. Kumar' ] } ]}
              series={[ { data: [ '24', '18', '32', '15', '35' ], label: 'Scheduled Evaluations' } ]}
              width={500}
              height={300}
            />
            <div
              style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#666' }}
            >
              Number of scheduled evaluations per professor
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col
        lg="6"
      >
        <Card
          style={{ marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003D7C', color: 'white', fontWeight: 'bold' }}
          >
            Evaluation Status by Professor
          </Card.Header>
          <Card.Body>
            <BarChart
              xAxis={[ { scaleType: 'band', data: [ 'Prof. Smith', 'Prof. Harris', 'Prof. Wong', 'Prof. Chen', 'Prof. Kumar' ] } ]}
              series={[ { data: [ '18', '12', '25', '10', '22' ], label: 'Completed' }, { data: [ '6', '6', '7', '5', '13' ], label: 'Pending' } ]}
              width={500}
              height={300}
            />
            <div
              style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#666' }}
            >
              Comparison of completed vs pending evaluations
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row
      className="mx-auto"
      md=""
      xl=""
    >
      <Col
        md="6"
      >
        <Card
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003D7C', color: 'white', fontWeight: 'bold' }}
          >
            Evaluation Completion Rates
          </Card.Header>
          <Card.Body>
            <PieChart
              series={[ { data: [ { id: 0, value: 35, label: 'Harris' }, { id: 1, value: 28, label: 'Smith' }, { id: 2, value: 22, label: 'Matthews' }, { id: 3, value: 15, label: 'Lee' } ] } ]}
              width={400}
              height={200}
            />
            <div
              style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#666' }}
            >
              Distribution of evaluations by course
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  <div
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
  </div>
</Container>);
}