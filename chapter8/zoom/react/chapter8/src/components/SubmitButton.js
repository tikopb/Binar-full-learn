import React from "react";

// ClassComponen

class SubmitButton extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            buttonName: "Submit"
        }
    }
    
    render() {
        const {buttonStyle} = styles;
        return(
            <div>
                <button styles={buttonStyle}>
                   <div> {this.state.buttonName} </div> 
                </button>
            </div>
        )
    }
}

const styles = {
    buttonStyle: {
        width: 40,
        height: 20,
        backgroundColor: "#FFFFFF"
    }
}

export default SubmitButton