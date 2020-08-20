import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import * as yup from 'yup';
import UserForm from './userForm';
import formSchema from './formSchema';


const initialValues ={
  id: uuid(),
 first_name: '',
 last_name: '',
  email: '',
  avatar: '',
  password: '',
  terms: '',

}

const initialErrors = {
  first_name: '',
 last_name: '',
  email: '',
password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

const [users, setUsers] = useState(initialUsers)
const [values, setValues] = useState(initialValues)
const [myErrors, setmyErrors] = useState(initialErrors)
const [disabled, setDisabled] = useState(initialDisabled)

//console.log(users)

const thisUrl = 'https://reqres.in/api/users'


const getUsers = () => {
  axios.get(thisUrl)
  .then(res => {
    setUsers(res.data.data)
    //console.log(res.data.data)
  })
  .catch(error => {
    console.log('check the axios get')
  })
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    
    setUsers([...users, res.data])
    
  })
  .catch(error => {
    console.log('check the axios post')
  })
  .finally(() => {
    setValues(initialValues)
  })
}


const inputChange = (name, value) => {
 
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
      setmyErrors({
        ...myErrors,
        [name]: ""
      });
  })
    .catch(error => {
      setmyErrors({
        ...myErrors,
        [name]: error.errors[0]
      });
    });
     
    setValues({
      ...values,
      [name]: value
    })

}

const checkboxChange = (name, isChecked) => {
  setValues({
    ...values,
    terms:{
      ...values.terms,
      [name]: isChecked
    }
  })
}


const submit = () => {
  const newUser = {
    first_name: values.first_name.trim(),
    last_name: values.last_name.trim(),
    email: values.email.trim(),
    avatar: values.avatar,
    password: values.password.trim(),
    terms: values.terms
  }
  postNewUser(newUser)
}

useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  formSchema.isValid(values)
  .then(valid => {
    setDisabled(!valid);
  });
}, [values])

  return (
    <div className="App">
      <header><h1>New User Form</h1></header>

    <UserForm
      values = {values}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      myErrors={myErrors}
    />
     
    {
      users.map(user => {
        return(
          <div className='cards' key={user.id}>
          <div className='cardContainer' >
          <h2>Name: {user.first_name} {user.last_name}</h2>
           <h3>Email: {user.email}</h3>
           <img className='avatar' src={user.avatar} alt={logo}/>
               <h3>Password: {user.password} </h3>
               <h3>Terms and Services: {user.terms} </h3>
           </div>
           </div>
        )
      })
    }

    </div>
  );
}

export default App;
