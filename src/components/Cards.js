import React from "react";
import Card from "./Card";

import image2 from '../assets/image2.jpg'


const cards = [
  {
    id: 1,
    title: "Hello",
    image: image2,
  },
  {
    id: 2,
    title: "hi",
    image: image2,
  },
  {
    id: 3,
    title: "hello",
    image: image2,
  },
];

function Cards() {
  return (
    <div className="container container2">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4 container2" key={id}>
            <Card imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
