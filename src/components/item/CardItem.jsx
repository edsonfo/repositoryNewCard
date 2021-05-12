import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import "./card.css";

const CardItem = ({item, visible})=>{
  return (
    visible && (
      <Col md={4}>
        <Card className="card-style">
        <Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>{item.title}</Card.Text>
					</Card.Body>
					<Button variant="primary" >
						More Info
					</Button>
        </Card>
      </Col>
    )
  )
}

CardItem.propTypes = {
	CardItem: PropTypes.object.isRequired
}
export default CardItem;
