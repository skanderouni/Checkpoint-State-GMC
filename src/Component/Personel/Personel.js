import React from "react";
import { Card } from "react-bootstrap";

class Personel extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/skander.jpg" />
        <Card.Body>
          <h3> Skander Ouni </h3>
          <Card.Title>Web Developer</Card.Title>
          <Card.Text>
            «I am self-taught, and i always had the desire to learn anything in
            every field. I have the persistence and the passion in me to make me
            able to discover new fields and excel at them.»
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Personel;
