import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchForm({ params, onParamChange }) {
  return (
    <Form>
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            name="description"
            value={params.description}
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            name="location"
            value={params.location}
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            className="mb-2"
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            label="Only Full Time"
            type="checkbox"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default SearchForm;
