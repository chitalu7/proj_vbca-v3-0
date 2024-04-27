import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ContractCard.css'; // Import the CSS file

function ContractCard({ image, title, description }) {
  return (
    <Card className="contract-card">
      <Card.Img variant="top" src={image} />
      <Card.Body className="contract-card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default ContractCard;
