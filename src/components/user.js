import React, { Component } from 'react';
import FormFields from '../widgets/forms/form_feilds';
import {firebaseDB} from "../firebase_main";

class User extends Component {

    state = {
        formData : {
            name: {
                element:'input',
                value:'',
                label:true,
                labelText:"Name",
                config: {
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter Your Name'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                valid_msg:''
            },
            lastname: {
                element:'input',
                value:'',
                label:true,
                labelText:"Lastname",
                config: {
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter Your Last Name'
                },
                validation:{
                    required:false,
                },
                valid:false,
                touched:false,
                valid_msg:''
            },
            message: {
                element:'textarea',
                value:'',
                label:true,
                labelText:"Message",
                config: {
                    name:'message_input',
                    rows:4,
                    cols:36,
                    placeholder:'Your Message'
                },
                validation:{
                    required:false,
                },
                valid:false,
                touched:false,
                valid_msg:''
            },
            age: {
                element:'select',
                value:'',
                label:true,
                labelText:"Age",
                config: {
                    name:'age_input',
                    options:[
                        {val:1,text:'10-20'},
                        {val:2,text:'20-30'},
                        {val:3,text:'+30'}
                    ]
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                valid_msg:''
            },
        }
    }

    updateForm = newState => {
        this.setState({
            formData:newState
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        let data = {};
        for(let key in this.state.formData){
            data[key] = this.state.formData[key].value;
        }

        let formIsValid = true;
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        if(formIsValid){
            firebaseDB.ref('users').push(data)
            .then(() => {
                console.log("new users added");                
            })
            .catch((err) => {
                console.log(err);                
            })    
        }else{
            console.error(data);
        }
          
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmitForm}>
                    <FormFields
                        formData={this.state.formData} 
                        change={(newState) => this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;