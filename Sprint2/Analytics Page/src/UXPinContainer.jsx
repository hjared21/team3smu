import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Tab } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';


export default function UXPinContainer() {

const [visible, setVisible] = React.useState(false);
const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState(undefined);
const [value4, setValue4] = React.useState(undefined);

  return (<Container
  fluid="true"
  style={{ fontFamily: 'Arial, sans-serif' }}
>
  <Navbar
    expand="lg"
    style={{ backgroundColor: '#00205b', color: 'white' }}
  >
    <Container>
      <Navbar.Brand
        href="#home"
        style={{ color: 'white' }}
      >
        <img
          src="https://preview.uxpin.com/external-url"
          alt="SMU Logo"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
      >
        <Nav
          className="ms-auto"
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
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container
    style={{ marginTop: '20px' }}
  >
    <h2
      style={{ color: '#00205b', fontWeight: 'bold' }}
    >
      Course Analytics Dashboard
    </h2>
    <p
    >
      View analytical data for courses and student groups. 
    </p>
    <Card
      style={{ marginBottom: '20px', borderColor: '#dee2e6' }}
    >
      <Card.Header
        style={{ backgroundColor: '#00205b', color: 'white', fontWeight: 'bold' }}
      >
        Analytics Overview
      </Card.Header>
      <Card.Body>
        <Row>
          <Col
            md="6"
          >
            <Card
              style={{ marginBottom: '15px', borderColor: '#dee2e6' }}
            >
              <Card.Header
                style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}
              >
                Students per Course
              </Card.Header>
              <Card.Body>
                <BarChart
                  xAxis={[ { scaleType: 'band', data: [ 'IS111', 'CS101', 'IS110', 'CS201', 'IS112', 'CS102' ] } ]}
                  series={[ { data: [ '45', '38', '42', '30', '35', '28' ] } ]}
                  width={500}
                  height={300}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col
            md="6"
          >
            <Card
              style={{ marginBottom: '15px', borderColor: '#dee2e6' }}
            >
              <Card.Header
                style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}
              >
                Groups per Course
              </Card.Header>
              <Card.Body>
                <ScatterChart
                  width={500}
                  height={300}
                  series={[ { data: [ { x: 100, y: 200, id: 'IS111' }, { x: 120, y: 100, id: 'CS101' }, { x: 170, y: 300, id: 'IS110' }, { x: 140, y: 250, id: 'CS201' }, { x: 150, y: 400, id: 'IS112' }, { x: 110, y: 280, id: 'CS102' } ], label: 'Course Groups' } ]}
                  xAxis={[ { min: 0, max: 200, label: 'Number of Students' } ]}
                  yAxis={[ { min: 0, max: 500, label: 'Number of Groups' } ]}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <Card
      style={{ marginBottom: '20px', borderColor: '#dee2e6' }}
    >
      <Card.Header
        style={{ backgroundColor: '#00205b', color: 'white', fontWeight: 'bold' }}
      >
        Detailed Analytics
      </Card.Header>
      <Card.Body>
        <Tabs
          defaultActiveKey="course"
          className="mb-3"
        >
          <Tab
            eventKey="course"
            title="Course Analytics"
          >
            <Table
              striped={true}
              bordered={true}
              hover={true}
            >
              <thead
              >
                <tr
                >
                  <th
                  >
                    Course Code
                  </th>
                  <th
                  >
                    Course Name
                  </th>
                  <th
                  >
                    Students Enrolled
                  </th>
                  <th
                  >
                    Groups Formed
                  </th>
                  <th
                  >
                    Average Group Size
                  </th>
                </tr>
              </thead>
              <tbody
              >
                <tr
                >
                  <td
                  >
                    IS111
                  </td>
                  <td
                  >
                    Introduction to Programming
                  </td>
                  <td
                  >
                    45
                  </td>
                  <td
                  >
                    9
                  </td>
                  <td
                  >
                    5.0
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    CS101
                  </td>
                  <td
                  >
                    Computer Science Fundamentals
                  </td>
                  <td
                  >
                    38
                  </td>
                  <td
                  >
                    8
                  </td>
                  <td
                  >
                    4.8
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    IS110
                  </td>
                  <td
                  >
                    Data Management
                  </td>
                  <td
                  >
                    42
                  </td>
                  <td
                  >
                    9
                  </td>
                  <td
                  >
                    4.7
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    CS201
                  </td>
                  <td
                  >
                    Algorithms and Data Structures
                  </td>
                  <td
                  >
                    30
                  </td>
                  <td
                  >
                    6
                  </td>
                  <td
                  >
                    5.0
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    IS112
                  </td>
                  <td
                  >
                    Data Science Fundamentals
                  </td>
                  <td
                  >
                    35
                  </td>
                  <td
                  >
                    7
                  </td>
                  <td
                  >
                    5.0
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab
            eventKey="group"
            title="Group Analytics"
          >
            <Table
              striped={true}
              bordered={true}
              hover={true}
            >
              <thead
              >
                <tr
                >
                  <th
                  >
                    Group ID
                  </th>
                  <th
                  >
                    Course
                  </th>
                  <th
                  >
                    Group Size
                  </th>
                  <th
                  >
                    Project Title
                  </th>
                  <th
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody
              >
                <tr
                >
                  <td
                  >
                    G-IS111-1
                  </td>
                  <td
                  >
                    IS111
                  </td>
                  <td
                  >
                    5
                  </td>
                  <td
                  >
                    Web Application Development
                  </td>
                  <td
                  >
                    Active
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    G-IS111-2
                  </td>
                  <td
                  >
                    IS111
                  </td>
                  <td
                  >
                    5
                  </td>
                  <td
                  >
                    Mobile App Project
                  </td>
                  <td
                  >
                    Active
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    G-CS101-1
                  </td>
                  <td
                  >
                    CS101
                  </td>
                  <td
                  >
                    4
                  </td>
                  <td
                  >
                    Algorithm Implementation
                  </td>
                  <td
                  >
                    Active
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    G-IS110-1
                  </td>
                  <td
                  >
                    IS110
                  </td>
                  <td
                  >
                    5
                  </td>
                  <td
                  >
                    Database Design Project
                  </td>
                  <td
                  >
                    Active
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    G-IS110-2
                  </td>
                  <td
                  >
                    IS110
                  </td>
                  <td
                  >
                    5
                  </td>
                  <td
                  >
                    SQL Implementation
                  </td>
                  <td
                  >
                    Active
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
    <div
      className="d-flex justify-content-between mb-4"
    >
      <Button
        style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
      >
        Return to Dashboard
      </Button>
      <div
      >
        <Button
          style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
        >
          Export Analytics Data
        </Button>
      </div>
    </div>
  </Container>
  <div
    style={{ backgroundColor: '#00205b', color: 'white', padding: '15px 0', textAlign: 'center', fontSize: '0.9rem' }}
  >
    <Container>
      <Row>
        <Col
          md="6"
          className="text-md-start"
        >
          © 2023 Singapore Management University. All Rights Reserved.
        </Col>
        <Col
          md="6"
          className="text-md-end"
        >
          <span
            style={{ marginRight: '20px' }}
          >
            Technical Help
          </span>
          <span
            style={{ marginRight: '20px' }}
          >
            Privacy Policy
          </span>
          <span
          >
            Terms of Use
          </span>
        </Col>
      </Row>
    </Container>
  </div>
</Container>);
}