import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardDeck, Card, Button } from 'react-bootstrap';
import 'tachyons';
import './App.css';

import FormPage from './ContactForm';
import PortfolioCard from './PortfolioCard';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='head_content'>
        <MDBMask className="flex-center flex-column text-black main_head">
            <h1>We Create What You Desire</h1>
            <p>Our main objective is to Design and Develop beautiful websites based on the Client’s demands, which helps them succeed in their business objectives.We have more than four years of experience in website designing and development of web applications.</p>
        </MDBMask>
        <MDBMask className="flex-center my-5 contact_form">
            <FormPage />
        </MDBMask>
    </div>
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
        <section className="bg-danger servicesection">
          <div className="container service_card">
            <h1 className="head_1">What We Offer</h1>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://softles.com/images/mobile-app.svg" />
                <Card.Body>
                  <Card.Title>UI/UX Design</Card.Title>
                  <Card.Text>
                    <Button variant="secondary" size="lg" block>
                      Learn More
              </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://softles.com/images/responsive.svg" />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    <Button variant="secondary" size="lg" block>
                      Learn More
              </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://softles.com/images/database.svg" />
                <Card.Body>
                  <Card.Title>E-mail & Hosting</Card.Title>
                  <Card.Text>
                    <Button variant="secondary" size="lg" block>
                      Learn More
              </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://softles.com/images/workspace.svg" />
                <Card.Body>
                  <Card.Title>Design & Branding</Card.Title>
                  <Card.Text>
                    <Button variant="secondary" size="lg" block>
                      Learn More
              </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <br></br>
        </section>
        <section className="bg-dark Portfolio">
          <div className="container">
            <div className="row">
              <PortfolioCard/><br></br>
              <PortfolioCard/>
              <PortfolioCard/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;