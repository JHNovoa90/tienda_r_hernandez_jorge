import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({item}) => {
    const {name, price, stock, image} = item
    return (
        <Card style={{ width: '18rem', margin:20 }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                €{price}
                <br />
                Stock:{stock}
            </Card.Text>
            <Button variant="primary">Ver detalle</Button>
        </Card.Body>
        </Card>
    )
}

export default Item