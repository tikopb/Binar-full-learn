import React, { Component, Fragment } from 'react';
import { Container  } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    danger: false 
  }
  
  handleOnClick = event => {
    this.setState({ danger: true })
  }
  
  render() {
  const { danger } = this.state
   return(
      <Container style={{width: "100%", height: "100%"}}>
        <Container className="text-center">
          <Button className="mb-4" color="danger" onClick={this.handleOnClick}>Hati-Hati</Button>
          { 
            danger && <Alert color="danger">DIBILANG HATI-HATI</Alert> 
          }
        </Container>
      </Container>
   )};
}

export default App;