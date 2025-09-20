import React, { useEffect, useState } from "react";
import './LoginComponent.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Service from '../../Services/AuthServices'
export default function LoginCopmonent(){

    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [token,SetToken]=useState('');
 
    async function Authentication () {
    try{
const data = {email,password}
console.log("data=>",data);

const res = await Service.AuthUser(data)
console.log("RESPONSE =>",res);
    }
    catch(err){
console.log("Error =>",err);

    }
    }
    return(
        
        <div className="body">
        <div className="center-block">
        <Form >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{SetEmail(e.target.value) ,console.log("email =>",e.target.value)
        } } />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{SetPassword(e.target.value),console.log("password =>",e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={Authentication}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
        
    )
}