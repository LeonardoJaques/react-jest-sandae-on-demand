import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default function ToppingOptions({ name, imagePath, updateItemCount }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '45%', marginTop: '10px' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(evt) => updateItemCount(name, evt.target.checked ? 1 : 0)}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}
