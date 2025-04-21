import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export default function UXPinCard() {

const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState(undefined);
const [value4, setValue4] = React.useState(undefined);
const [value6, setValue6] = React.useState(undefined);
const [checked, setChecked] = React.useState(false);
const [checked2, setChecked2] = React.useState(false);
const [checked4, setChecked4] = React.useState(false);
const [checked6, setChecked6] = React.useState(false);
const [checked8, setChecked8] = React.useState(false);
const [checked10, setChecked10] = React.useState(false);
const [checked12, setChecked12] = React.useState(false);
const [value8, setValue8] = React.useState(undefined);

  return (<Card
  style={{ marginBottom: '30px' }}
>
  <Card.Header
    style={{ backgroundColor: '#003366', color: 'white', fontWeight: 'bold' }}
  >
    Edit Ongoing Evaluation
  </Card.Header>
  <Card.Body>
    <Form>
      <Row>
        <Col
          md="6"
        >
          <Form.Group
            className="mb-3"
          >
            <Form.Label
              style={{ fontWeight: 'bold' }}
            >
              Evaluation Title*
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Midterm Peer Evaluation"
              plaintext={false}
              value={value}
              onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
            />
            <Form.Text
              style={{ color: '#6c757d' }}
            >
              Title must be unique per course
            </Form.Text>
          </Form.Group>
        </Col>
        <Col
          md="6"
        >
          <Form.Group
            className="mb-3"
          >
            <Form.Label
              style={{ fontWeight: 'bold' }}
            >
              Course
            </Form.Label>
            <Form.Select
              value={value2}
              onChange={(...args) => { let value2 = args[0].target.value; setValue2(value2); }}
            >
              <option
              >
                Select Course
              </option>
              <option
              >
                CS101 Data Structures
              </option>
              <option
              >
                MKT202 Marketing Analytics
              </option>
              <option
              >
                FIN101 Financial Management
              </option>
            </Form.Select>
            <Form.Text
              style={{ color: '#6c757d' }}
            >
              Selecting a course will filter Assign to Groups section. 
            </Form.Text>
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
            <Form.Label
              style={{ fontWeight: 'bold' }}
            >
              Start Date & Time*
            </Form.Label>
            <Form.Control
              type="datetime-local"
              value={value4}
              onChange={(...args) => { let value4 = args[0].target.value; setValue4(value4); }}
            />
            <Form.Text
              style={{ color: '#6c757d' }}
            >
              Singapore Time (GMT+8)
            </Form.Text>
          </Form.Group>
        </Col>
        <Col
          md="6"
        >
          <Form.Group
            className="mb-3"
          >
            <Form.Label
              style={{ fontWeight: 'bold' }}
            >
              End Date & Time*
            </Form.Label>
            <Form.Control
              type="datetime-local"
              value={value6}
              onChange={(...args) => { let value6 = args[0].target.value; setValue6(value6); }}
            />
            <Form.Text
              style={{ color: '#6c757d' }}
            >
              Singapore Time (GMT+8)
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group
        className="mb-3"
      >
        <Form.Label
          style={{ fontWeight: 'bold' }}
        >
          Assign to Groups*
        </Form.Label>
        <div
          style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ced4da', padding: '10px', borderRadius: '4px' }}
        >
          <Form.Check
            type="checkbox"
            label="All Groups"
            id="all-groups"
            checked={checked}
            onChange={(...args) => { let checked = args[0].target.checked; setChecked(checked); }}
          />
          <hr
            style={{ margin: '8px 0' }}
          />
          <Form.Check
            type="checkbox"
            label="Group A - CS101"
            id="group-a-cs101"
            checked={checked2}
            onChange={(...args) => { let checked2 = args[0].target.checked; setChecked2(checked2); }}
          />
          <Form.Check
            type="checkbox"
            label="Group B - CS101"
            id="group-b-cs101"
            checked={checked4}
            onChange={(...args) => { let checked4 = args[0].target.checked; setChecked4(checked4); }}
          />
          <Form.Check
            type="checkbox"
            label="Team 1 - MKT202"
            id="team-1-mkt202"
            checked={checked6}
            onChange={(...args) => { let checked6 = args[0].target.checked; setChecked6(checked6); }}
          />
          <Form.Check
            type="checkbox"
            label="Team 2 - MKT202"
            id="team-2-mkt202"
            checked={checked8}
            onChange={(...args) => { let checked8 = args[0].target.checked; setChecked8(checked8); }}
          />
          <Form.Check
            type="checkbox"
            label="Finance Group 1 - FIN101"
            id="finance-group-1"
            checked={checked10}
            onChange={(...args) => { let checked10 = args[0].target.checked; setChecked10(checked10); }}
          />
          <Form.Check
            type="checkbox"
            label="Finance Group 2 - FIN101"
            id="finance-group-2"
            checked={checked12}
            onChange={(...args) => { let checked12 = args[0].target.checked; setChecked12(checked12); }}
          />
        </div>
        <Form.Text
          style={{ color: '#6c757d' }}
        >
          Must assign to at least one group
        </Form.Text>
      </Form.Group>
      <Form.Group
        className="mb-3"
      >
        <Form.Label
          style={{ fontWeight: 'bold' }}
        >
          Additional Instructions (Optional)
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter any additional instructions for students..."
          value={value8}
          onChange={(...args) => { let value8 = args[0].target.value; setValue8(value8); }}
        />
      </Form.Group>
      <div
        className="d-flex justify-content-end"
      >
        <Button
          variant="secondary"
          style={{ marginRight: '10px' }}
        >
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: '#003366' }}
        >
          Save Changes
        </Button>
      </div>
    </Form>
  </Card.Body>
</Card>);
}