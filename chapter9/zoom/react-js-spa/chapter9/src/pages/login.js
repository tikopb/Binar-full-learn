import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';

class Response extends String { 
    json = () => JSON.parse(this)
}

function mockFetch(url, { body }) {
    const { email, password } = body
    if(email!== "admin@admin.com" || password!=="password") {
        return Promise.reject("Email atau Password salah!")
    }
    
    return Promise.resolve(
        new Response(
            JSON.stringify({
                accessToken: "ini Token"
            })
        )
    )
}

class Login extends Component {
    state = { 
        email: null, 
        password: null
    }
    
    set = name => event=> this.setState({ [name]: event.target.value})
    handleSubmit = event => {
        event.PreventDefault()
        const { email, password } = this.state
        const { history } = this.props
        mockFetch("http://contoh", { body: { email, password} })
        .then(Response => Response.json())
        .then(json => {
            localStorage.setItem("token", json.accessToken)
            history.push("/")
        })
        .catch(err => {alert(err) })
    }
    render() {
        return(
            <Container className="p-3 d-flex align-items-center justify-center">
                <h1> Login </h1>
                <form oSubmit={this.handleSubmit}>
                    <label> email </label>
                </form>
            </Container>
        )
    }
}

export default withRouter(Login);