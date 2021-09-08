import React, { Component } from 'react';
import { Alert, Button, Container  } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {
    danger: false,
    dataApi: [],
    show: false
  }
  
  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      this.setState({
        dataApi: res.data,
        show: true
      },() => {
        console.log(this.state.dataApi)
      })
    })
  }
  
  handleOnClick = event => {
    this.setState({ danger: true })
  }
  
  render() {
  const { danger } = this.state
  const { dataApi } = this.state
  
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