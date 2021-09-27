import react from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { Button, Container } from "reactstrap";

class About extends react.Component {
    state = {
        isAuthenticated: false    
    }
    
    componentDidMount() {
        this.checkUser()
    }
    
    checkUser = () => {
        const token = localStorage.getItem("token")
        if(!!token){
            return this.setState({
                isAuthenticated: true
            })
        }
    }
    
    handleLogout = () => {
        const { history } = this.props
        localStorage.removeItem("token")
        history.push("/login")
    }
    
    render() {
        const { isAuthenticated } = this.state
        if(!isAuthenticated) return <Redirect to="/login"/>
        return(
            <div>About</div>
        )
    }
}

export default withRouter(About)