import React, { useState } from "react";
import { Badge, Button, Container, Row } from "react-bootstrap";
import CardItem from "../item/CardItem";
import { connect } from "react-redux"

// import image2 from './image2.jpg';

const Cards = ({title}) => {
  const [checked, setChecked] = useState({
    checked: false,
    message: "Hide Cards",
  });
  const handleClick = () => {
    setChecked({
      checked: !checked.checked,
      message: !checked.checked ? "Hide Cards" : "Show Cards",
    });
  };
  const items = [
    {
      id: 1,
      title: "Title",
      visible: true,
    },
    {
      id: 2,
      title: "Title",
      visible: true,
    },
    {
      id: 3,
      title: "Title",
      visible: true,
    },
  ];
  return (
    <>
      <Button
        style={{ marginTop: "30px" }}
        variant="primary"
        size="lg"
        onClick={handleClick}
      >
        {checked.message}
      </Button>
      {checked.checked && (
        <Container>
          <h1>
            <Badge variant= "primary">{title}</Badge>
          </h1>
          <h3>Rendering title property from redux-store = {title}</h3>
          <Row className="justify-content-md-center">
            {items.map((item, key) => (
              <CardItem key={key} item={item} visible={item.visible} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  title: state.title
})

export default connect(mapStateToProps)(Cards)
