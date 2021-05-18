import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./card.css";

const CardItem = ({ item, visible }) => {
  return (
    visible && (
      <Col md={4}>
        <Card className="card-style">
          <Card.Body>
            <Card.Text>{item.title}</Card.Text>
          </Card.Body>
          <Form.Group>
            <Form.Check type="checkbox" />
            <Form.Control type="text" placeholder="Label text" />
          </Form.Group>
        </Card>
      </Col>
    )
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
};
export default CardItem;
