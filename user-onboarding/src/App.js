import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import UserForm from './userForm'

const initialValues ={
name: '',
email: '',
password: '',
terms: false,

}

const initialErrors = {
  name: '',
  email: '',
password: '',
terms: '',

}

const initialUsers = []
const initialDisabled = true

function App() {

const [users, setUsers] = useState(initialUsers)
const [values, setValues] = useState(initialValues)
const [errors, setErrors] = useState(initialErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const thisUrl = 'https://reqres.in/api/users'

const getUsers = () => {
  axios.get(thisUrl)
  .then(result => {
    setUsers(result.data)
  })
  .catch(error => {
    console.log('check the axios get')
  })
}

const postNewUser = newUser => {
  axios.post(thisUrl, newUser)
  .then(result => {
    setUsers([...users, result.data])
  })
  .catch(error => {
    console.log('check the axios post')
  })
  .finally(() => {
    setValues(initialValues)
  })
}


const inputChange = (name, value) => {
 

      setErrors({
        ...errors,
          [name]: errors.errors[0]

      })

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
    name: values.name.trim(),
    email: values.email.trim(),
password: values.password.trim(),
terms: values.terms,
  }
  postNewUser(newUser)
}

useEffect(() => {
  getUsers()
}, [])



  return (
    <div className="App">
      <header><h1>New User Form</h1></header>

    <UserForm
      values = {values}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={errors}
    />
     
    {/* {
      users.map(user => {
        return(
          <div className='userContainer' key={user.id}>
            <h2>Name: {user.name}</h2>
        <h3>Email: {user.email}</h3>
            <h3>Password: {user.password} </h3>
            <h3>Terms and Services: {user.terms} </h3>
            </div>
        )
      })
    } */}

    </div>
  );
}

export default App;
