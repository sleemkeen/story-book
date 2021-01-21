import { Button, Row,Container,Card } from 'react-bootstrap';

export default function ItemCard({items}){
    return (
        <Container>
            <Row>
            {items.map(item =>{ 
                return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                )
            })}   
            </Row>
        </Container>
    )
}