import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            name: this.name.value,
            lastname: this.lastname.value,
        }
        console.log(values);
        
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name:</label>
                        <input 
                            type="text"
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name:</label>
                        <input 
                            type="text"
                            ref={input => this.lastname = input}                      
                        />
                    </div>
                    <button type="submit" onClick={this.handleSubmit} >Sign In</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;