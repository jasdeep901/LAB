import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Jumbotron} from 'react-bootstrap';
 

const Greeting = ({name}) => {

  return (
    
     <Container>
  <Jumbotron
 
  style={
    {
    backgroundColor : '#FFFF00',
      color:'#FF0000'
    }
  }
  >
          <h1> Hi, {name} Enjoy ThanksGiving!!!</h1>
          
          </Jumbotron>
          </Container>
  );
 
};

export default Greeting;
