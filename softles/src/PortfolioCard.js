import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { CardDeck, Card, Button } from 'react-bootstrap';


const PortfolioCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <Button variant="secondary" size="lg" block>
                        Learn More
              </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PortfolioCard;