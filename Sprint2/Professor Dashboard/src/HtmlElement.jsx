import React from 'react';
import { Alert } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export default function HtmlElement() {

const [visible, setVisible] = React.useState(false);

  return (<div
>
  <Navbar
    style={{ backgroundColor: 'rgb(0, 51, 102)', padding: '10px 0' }}
    expand="lg"
  >
    <Container>
      <Navbar.Brand
        href="#home"
      >
        <img
          src="https://preview.uxpin.com/external-url"
          alt="SMU Logo"
          width="150"
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
    </Container>
  </Navbar>
  <Container
    style={{ marginTop: '20px', marginBottom: '30px' }}
  >
    <Row>
      <Col>
        <h1
          style={{ color: 'rgb(0, 51, 102)', fontWeight: 'bold', fontSize: '32px' }}
        >
          Professor Dashboard
        </h1>
        <p
          style={{ color: '#555' }}
        >
          Welcome back, Prof. John Doe. Manage your courses, student groups, and peer evaluations.
        </p>
      </Col>
    </Row>
    <Row
      style={{ marginTop: '15px' }}
    >
      <Col>
        <Alert
          variant="info"
          style={{ borderLeft: '4px solid rgb(0, 51, 102)', backgroundColor: '#e1f5fe' }}
        >
          <strong
          >
            Important Announcement
          </strong>
          <p
            style={{ margin: '5px 0 0 0' }}
          >
            End-of-semester peer evaluations need to be scheduled by December 10, 2025.
          </p>
        </Alert>
      </Col>
    </Row>
    <Row
      style={{ marginTop: '25px' }}
    >
      <Col
        md="4"
      >
        <Card
          style={{ height: '100%', borderRadius: '5px', border: '1px solid #dee2e6' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white', fontWeight: 'bold', padding: '15px' }}
          >
            Students & Courses
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Add and manage students and courses for the current semester.
            </Card.Text>
            <ListGroup
              variant="flush"
            >
              <ListGroup.Item
                style={{ padding: '12px 0' }}
              >
                <strong
                >
                  Active Courses: 5
                </strong>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0' }}
              >
                <strong
                >
                  Total Students: 187
                </strong>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0' }}
              >
                <strong
                >
                  Last Updated: Oct 15, 2025
                </strong>
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              style={{ backgroundColor: '#C49B34', borderColor: '#C49B34', marginTop: '15px', width: '100%' }}
            >
              Manage Students & Courses
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md="4"
      >
        <Card
          style={{ height: '100%', borderRadius: '5px', border: '1px solid #dee2e6' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white', fontWeight: 'bold', padding: '15px' }}
          >
            Student Groups
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Create and manage student project groups within your courses.
            </Card.Text>
            <ListGroup
              variant="flush"
            >
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  CS301 Data Structures
                </span>
                <Badge
                  bg="success"
                >
                  7 Groups
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  MKT202 Marketing Analytics
                </span>
                <Badge
                  bg="success"
                >
                  5 Groups
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  FIN101 Financial Management
                </span>
                <Badge
                  bg="success"
                >
                  6 Groups
                </Badge>
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              style={{ backgroundColor: '#C49B34', borderColor: '#C49B34', marginTop: '15px', width: '100%' }}
            >
              Manage Student Groups
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md="4"
      >
        <Card
          style={{ height: '100%', borderRadius: '5px', border: '1px solid #dee2e6' }}
        >
          <Card.Header
            style={{ backgroundColor: '#003366', color: 'white', fontWeight: 'bold', padding: '15px' }}
          >
            Peer Evaluations
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Schedule and monitor peer evaluations for your courses.
            </Card.Text>
            <ListGroup
              variant="flush"
            >
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  CS301 Data Structures
                </span>
                <Badge
                  bg="danger"
                >
                  Not Started
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  MKT202 Marketing Analytics
                </span>
                <Badge
                  bg="danger"
                >
                  Not Started
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}
              >
                <span
                >
                  FIN101 Financial Management
                </span>
                <Badge
                  bg="success"
                >
                  Completed
                </Badge>
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              style={{ backgroundColor: '#C49B34', borderColor: '#C49B34', marginTop: '15px', width: '100%' }}
            >
              Manage Peer Evaluations
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  <footer
    style={{ backgroundColor: 'rgb(0, 51, 102)', color: 'white', padding: '20px 0', marginTop: '30px' }}
  >
    <Container>
      <Row>
        <Col
          md="8"
        >
          <p
            style={{ margin: '0' }}
          >
            © 2025 Singapore Management University. All Rights Reserved.
          </p>
        </Col>
        <Col
          md="4"
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
</div>);
}