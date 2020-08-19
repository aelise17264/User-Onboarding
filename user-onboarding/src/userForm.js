import React from 'react'

function UserForm(props){
const {
    values, 
    inputChange,
    checkboxChange,
    submit,
    disabled,
    myErrors
} = props

const onSubmit = event => {
    event.preventDefault()
    submit()
    console.log(submit())
}

const onCBChange = event => {
    const {name, checked} = event.target
    checkboxChange(name, checked)
}

const onIpChange = event => {
    const {name, value} = event.target
   
    inputChange(name, value)
    console.log(name, value)
}

return(
    <form className='formContainer' onSubmit={onSubmit}>
        <div className='formInfo'>
            <h2>Sign Up</h2>
            <label>First Name:
                <input
                value={values.first_name}
                onChange={onIpChange}
                name='first_name'
                type='text'
                />
            </label>
            <label>Last Name:
                <input
                value={values.last_name}
                onChange={onIpChange}
                name='last_name'
                type='text'
                />
            </label>
            <label>Email:
                <input
                value={values.email}
                onChange={onIpChange}
                name='email'
                type='email'
                />
            </label>
            <label>Password:
                <input
                value={values.password}
                onChange={onIpChange}
                name='password'
                type='text'
                />
            </label>
            <label>Terms and Services:
                <input
                onChange={onCBChange}
                name='terms'
                type='checkbox'
                checked={values.terms}
                />
            </label>

        </div>
   <div className='myErrors'>
   <div>{myErrors.first_name}</div>
   <div>{myErrors.last_name}</div>
          <div>{myErrors.email}</div>
          <div>{myErrors.password}</div>
   </div>
    <div className='submit'>
<button disabled={disabled}>Submit</button>

    </div>

    </form>
)

}

export default UserForm