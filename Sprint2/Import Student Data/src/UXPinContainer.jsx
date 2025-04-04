import React from 'react';
import { Alert } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';


export default function UXPinContainer() {

const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState(undefined);
const [value4, setValue4] = React.useState(undefined);
const [value6, setValue6] = React.useState(undefined);
const [value8, setValue8] = React.useState(undefined);
const [value10, setValue10] = React.useState(undefined);
const [value12, setValue12] = React.useState(undefined);
const [value14, setValue14] = React.useState(undefined);
const [value16, setValue16] = React.useState(undefined);
const [value18, setValue18] = React.useState(undefined);
const [value20, setValue20] = React.useState(undefined);
const [value22, setValue22] = React.useState(undefined);

  return (<Container
  fluid="true"
  style={{ padding: '0' }}
>
  <Navbar
    style={{ backgroundColor: 'rgb(0, 51, 102)', padding: '10px 20px' }}
    expand="lg"
  >
    <Navbar.Brand
      href="#home"
    >
      <img
        src="https://preview.uxpin.com/external-url"
        alt=""
        width="120"
        height="50"
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
          style={{ color: '#ffffff' }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#dashboard"
          style={{ color: '#ffffff' }}
        >
          Dashboard
        </Nav.Link>
        <Nav.Link
          href="#profile"
          style={{ color: '#ffffff' }}
        >
          Profile
        </Nav.Link>
        <Nav.Link
          href="#help"
          style={{ color: '#ffffff' }}
        >
          Help
        </Nav.Link>
        <Nav.Link
          href="#logout"
          style={{ color: '#ffffff' }}
        >
          Logout
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Container
    fluid="true"
    style={{ padding: '20px' }}
  >
    <Row>
      <Col>
        <h2
          style={{ color: 'rgb(0, 51, 102)', fontWeight: 'bold', marginBottom: '10px' }}
        >
          Import Students & Courses
        </h2>
        <p
          style={{ color: '#555' }}
        >
          Welcome back, Prof. John Doe. Add your students and courses for the current semester.
        </p>
      </Col>
    </Row>
    <Row
      className="mb-4"
    >
      <Col>
        <Alert
          variant="info"
        >
          <Alert.Heading
            style={{ fontSize: '18px' }}
          >
            Important Information
          </Alert.Heading>
          <p
            className="mb-0"
          >
            You can add student and course information manually or import from a CSV file. All information will be saved to the database automatically.
          </p>
        </Alert>
      </Col>
    </Row>
    <Tabs
      defaultActiveKey="students"
      className="mb-4"
    >
      <Tab
        eventKey="students"
        title="Import Students"
      >
        <Card>
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white' }}
          >
            <h5
              className="mb-0"
            >
              Student Information
            </h5>
          </Card.Header>
          <Card.Body>
            <Tabs
              defaultActiveKey="manual_student"
              id="student-tabs"
            >
              <Tab
                eventKey="manual_student"
                title="Manual Entry"
              >
                <div
                  style={{ padding: '20px 0' }}
                >
                  <Form>
                    <Row>
                      <Col
                        md="4"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={value}
                            onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="4"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={value2}
                            onChange={(...args) => { let value2 = args[0].target.value; setValue2(value2); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="4"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email address"
                            value={value4}
                            onChange={(...args) => { let value4 = args[0].target.value; setValue4(value4); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="4"
                      >
                        <Form.Label>
                          Enrolled Courses
                        </Form.Label>
                        <Form.Select
                          value={value6}
                          onChange={(...args) => { let value6 = args[0].target.value; setValue6(value6); }}
                        >
                          <option
                          >
                            BIT 4484
                          </option>
                          <option
                          >
                            BIT 2604
                          </option>
                          <option
                          >
                            BIT 2605
                          </option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button
                      variant="primary"
                      style={{ backgroundColor: 'rgb(0, 51, 102)', borderColor: 'rgb(0, 51, 102)' }}
                    >
                      Add Student
                    </Button>
                  </Form>
                </div>
              </Tab>
              <Tab
                eventKey="import_student"
                title="CSV Import"
              >
                <div
                  style={{ padding: '20px 0' }}
                >
                  <Alert
                    variant="secondary"
                  >
                    <p
                      className="mb-0"
                    >
                      CSV file should contain columns: First Name, Last Name, Email
                    </p>
                  </Alert>
                  <Form>
                    <Form.Group
                      className="mb-3"
                    >
                      <Form.Label>
                        Upload Student CSV File
                      </Form.Label>
                      <Form.Control
                        type="file"
                        accept=".csv"
                        value={value8}
                        onChange={(...args) => { let value8 = args[0].target.value; setValue8(value8); }}
                      />
                      <Form.Text
                        className="text-muted"
                      >
                        Maximum file size: 5MB
                      </Form.Text>
                    </Form.Group>
                    <Button
                      variant="primary"
                      style={{ backgroundColor: 'rgb(0, 51, 102)', borderColor: 'rgb(0, 51, 102)' }}
                    >
                      Upload and Import
                    </Button>
                  </Form>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Tab>
      <Tab
        eventKey="courses"
        title="Import Courses"
      >
        <Card>
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white' }}
          >
            <h5
              className="mb-0"
            >
              Course Information
            </h5>
          </Card.Header>
          <Card.Body>
            <Tabs
              defaultActiveKey="manual_course"
              id="course-tabs"
            >
              <Tab
                eventKey="manual_course"
                title="Manual Entry"
              >
                <div
                  style={{ padding: '20px 0' }}
                >
                  <Form>
                    <Row>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Course Code
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., CS101"
                            value={value10}
                            onChange={(...args) => { let value10 = args[0].target.value; setValue10(value10); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Course Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Introduction to Computer Science"
                            value={value12}
                            onChange={(...args) => { let value12 = args[0].target.value; setValue12(value12); }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Professor ID
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter professor ID"
                            value={value14}
                            onChange={(...args) => { let value14 = args[0].target.value; setValue14(value14); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Semester
                          </Form.Label>
                          <Form.Select
                            value={value16}
                            onChange={(...args) => { let value16 = args[0].target.value; setValue16(value16); }}
                          >
                            <option
                            >
                              Select semester
                            </option>
                            <option
                              value="term1"
                            >
                              Term 1
                            </option>
                            <option
                              value="term2"
                            >
                              Term 2
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Academic Year
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., 2023-2024"
                            value={value18}
                            onChange={(...args) => { let value18 = args[0].target.value; setValue18(value18); }}
                          />
                        </Form.Group>
                      </Col>
                      <Col
                        md="6"
                      >
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>
                            Time
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Mon 10:00-12:00"
                            value={value20}
                            onChange={(...args) => { let value20 = args[0].target.value; setValue20(value20); }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      variant="primary"
                      style={{ backgroundColor: 'rgb(0, 51, 102)', borderColor: 'rgb(0, 51, 102)' }}
                    >
                      Add Course
                    </Button>
                  </Form>
                </div>
              </Tab>
              <Tab
                eventKey="import_course"
                title="CSV Import"
              >
                <div
                  style={{ padding: '20px 0' }}
                >
                  <Alert
                    variant="secondary"
                  >
                    <p
                      className="mb-0"
                    >
                      CSV file should contain columns: Course Code, Course Name, Professor ID, Semester, Academic Year, Time
                    </p>
                  </Alert>
                  <Form>
                    <Form.Group
                      className="mb-3"
                    >
                      <Form.Label>
                        Upload Course CSV File
                      </Form.Label>
                      <Form.Control
                        type="file"
                        accept=".csv"
                        value={value22}
                        onChange={(...args) => { let value22 = args[0].target.value; setValue22(value22); }}
                      />
                      <Form.Text
                        className="text-muted"
                      >
                        Maximum file size: 5MB
                      </Form.Text>
                    </Form.Group>
                    <Button
                      variant="primary"
                      style={{ backgroundColor: 'rgb(0, 51, 102)', borderColor: 'rgb(0, 51, 102)' }}
                    >
                      Upload and Import
                    </Button>
                  </Form>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Tab>
    </Tabs>
    <Row
      className="mt-4"
    >
      <Col>
        <Card>
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white' }}
          >
            <h5
              className="mb-0"
            >
              Recent Imports
            </h5>
          </Card.Header>
          <Card.Body>
            <Table
              striped={true}
              bordered={true}
              hover={true}
              responsive="true"
            >
              <thead
              >
                <tr
                >
                  <th
                  >
                    Import Type
                  </th>
                  <th
                  >
                    Date
                  </th>
                  <th
                  >
                    Records
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
                    Students
                  </td>
                  <td
                  >
                    10 Oct 2023
                  </td>
                  <td
                  >
                    45
                  </td>
                  <td
                  >
                    <Badge
                      bg="success"
                    >
                      Completed
                    </Badge>
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    Courses
                  </td>
                  <td
                  >
                    8 Oct 2023
                  </td>
                  <td
                  >
                    12
                  </td>
                  <td
                  >
                    <Badge
                      bg="success"
                    >
                      Completed
                    </Badge>
                  </td>
                </tr>
                <tr
                >
                  <td
                  >
                    Students
                  </td>
                  <td
                  >
                    1 Oct 2023
                  </td>
                  <td
                  >
                    28
                  </td>
                  <td
                  >
                    <Badge
                      bg="success"
                    >
                      Completed
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row
      className="mt-4"
    >
      <Col
        className="d-flex justify-content-center"
      >
        <Button
          variant="warning"
          className="me-2"
          style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}
        >
          Return to Dashboard
        </Button>
        <Button
          variant="success"
          style={{ backgroundColor: '#5cb85c', borderColor: '#5cb85c' }}
          active={true}
        >
          Group Students
        </Button>
      </Col>
    </Row>
    <Modal
      show={false}
    >
      <Modal.Header
        style={{ backgroundColor: '#051c2c', color: 'white' }}
      >
        <Modal.Title>
          Import Successful
        </Modal.Title>
        <Button
          variant="link"
          style={{ color: 'white' }}
        >
          <span
            aria-hidden="true"
          >
            ×
          </span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <p
        >
          Your data has been successfully imported to the database.
        </p>
        <ul
        >
          <li
          >
            Students imported: 45
          </li>
          <li
          >
            Courses imported: 0
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
        >
          Close
        </Button>
        <Button
          variant="primary"
          style={{ backgroundColor: '#051c2c', borderColor: '#051c2c' }}
        >
          Import More
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
  <footer
    style={{ backgroundColor: 'rgb(0, 51, 102)', color: 'white', padding: '15px 0', marginTop: '30px' }}
  >
    <Container>
      <Row>
        <Col
          md="6"
        >
          <p
            className="mb-0"
          >
            © 2025 Singapore Management University. All Rights Reserved.
          </p>
        </Col>
        <Col
          md="6"
          className="text-md-end"
        >
          <small
          >
            <span
            >
              Professor Portal v2.5.1 | 
            </span>
            <a
              style={{ color: 'white' }}
              href="#privacy"
            >
              Privacy Policy
            </a>
            <span
            >
               | 
            </span>
            <a
              style={{ color: 'white' }}
              href="#terms"
            >
              Terms of Use
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
</Container>);
}