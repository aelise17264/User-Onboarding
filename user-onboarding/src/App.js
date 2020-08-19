import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'

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

const postUser = newUser => {
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

  return (
    <div className="App">


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
