import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function MyCard(props)
{
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  )
}
export default MyCard;