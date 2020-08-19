import React from 'react'

function UserForm(props){
const {
    values, 
    inputChange,
    checkboxChange,
    submit,
    disabled,
    errors
} = props

const onSubmit = event => {
    event.preventDefault()
    submit()
}

const onCBChange = event => {
    const {name, checked} = event.target
    checkboxChange(name, checked)
}

const onIpChange = event => {
    const {name, value} = event.target
    inputChange(name, value)
}

return(
    <form className='formContainer' onSubmit={onSubmit}>
        <div className='formInfo'>
            <h2>Sign Up</h2>
            <label>Name:
                <input
                value={values.name}
                onChange={onIpChange}
                name='name'
                type='text'
                />
            </label>
            <label>Email:
                <input
                value={values.naemailme}
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
   <div className='errors'>
   <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
   </div>
    <div className='submit'>
<button disabled={disabled}>Submit</button>

    </div>

    </form>
)

}

export default UserForm