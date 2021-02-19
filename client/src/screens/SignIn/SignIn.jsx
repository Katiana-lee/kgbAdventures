import React, { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import mapBackground from "../../images/mapBackground.png";

const SignIn = (props) => {

    const history = useHistory()

    const [form, setForm] = useState({
        username: '',
        password: '',
        isError: false,
        errorMsg: ''
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSignIn = event => {
        event.preventDefault()

        const { setUser } = props

        signIn(form)
            .then(user => {
                setUser(user)
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                setForm({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }

    const renderError = () => {
        const toggleForm = form.isError ? 'danger' : ''
        if (form.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {form.errorMsg}
                </button>
            )
        } else {
            return <button className="signupbutton" type="submit">Submit</button>
        }
    }

    const { username, password } = form

  return (
      // <div style={{background: `url(${mapBackground})`, width: '100vw', height: '100vh', backgroundSize: '800px'}}>
      <div className="form-container">
            <h3>Sign In</h3>
            <form onSubmit={onSignIn}>
                <label>Username</label>
                <input className="form-input"
                    required
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter Username"
                    onChange={handleChange}
                />
                <label>Password</label>
                <input className="form-input"
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                {renderError()}
            </form>
      </div>
      // </div>
    )
}

export default SignIn