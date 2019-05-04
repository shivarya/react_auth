import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:"",
        lastname:""
    }

    handleNameChange = (e) => {
       this.setState({name:e.target.value})
    }

    handleLastNameChange = (e) => {
        this.setState({lastname:e.target.value})
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name:</label>
                        <input 
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name:</label>
                        <input 
                            type="text"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;