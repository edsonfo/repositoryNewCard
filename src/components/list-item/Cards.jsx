import React, {useState} from "react";
import { Button, Container, Row } from "react-bootstrap";
import CardItem from "../item/CardItem";

// import image2 from './image2.jpg';


const Cards = (props)=> {
 
  const [checked, setChecked] = useState({
    checked: false,
    message: "Hide Cards"
  })
  const handleClick = () => {
    setChecked({
      checked:!checked.checked,
      message: !checked.checked ? "Hide Cards" :"Show Cards"
    })
  }
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
    }
  ]
  return (
		<>
			<Button
				style={{ marginTop: "30px" }}
				variant="primary"
				size="lg"
				onClick={handleClick}
			>
				{checked.message }
			</Button>
			{checked.checked && (
				<Container>
					<Row className="justify-content-md-center">
						{items.map((item, key) => (
							<CardItem key={key} item={item} visible={item.visible} />
						))}
					</Row>
				</Container>
			)}
		</>
	)
}
export default Cards;
