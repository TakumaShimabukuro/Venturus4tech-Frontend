import React, { useState, Fragment } from "react"
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"

import { user } from "../../services/user"
import { login } from "../../services/auth"

import "./SignUpAndLogin.css"

export default () => {
    const [isLogin, setIsLogin] = useState(true)
    const [userName, setUserName] = useState("")
    const [userLogin, setUserLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const onUserNameChange = e => {
        setUserName(e.target.value)
    }

    const onLoginChange = e => {
        setUserLogin(e.target.value)
    }

    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    const onRegister = async e => {
        e.preventDefault()
        const response = await user.register(userName, userLogin, password)
        console.log(response)
        // if (response.status >= 200 && response.status < 300) history.push("/timeline")
    }

    const onLogin = async e => {
        e.preventDefault()
        const response = await login(userLogin, password)
        console.log(response)
        if (response.status >= 200 && response.status < 300) history.push("/timeline")
    }

    const renderRegister = () => {
        return (
            <Fragment>
                <TextField
                    id="userName"
                    label="User Name"
                    value={userName}
                    onChange={onUserNameChange}
                    required
                />
                <TextField
                    id="userLogin"
                    label="User Login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                />
                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                    required
                />
                <Button color="primary" type="submit" >Sign up</Button>
                <Button color="secondary" type="submit" onClick={() => setIsLogin(true)} >Login</Button>
            </Fragment>
        )
    }

    const renderLogin = () => {
        return (
            <Fragment>
                <TextField
                    id="userLogin"
                    label="User Login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                />
                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                    required
                />
                <Button color="primary" type="submit" >Sign in</Button>
                <Button color="secondary" type="submit" onClick={() => setIsLogin(false)} >Sign up</Button>
            </Fragment>
        )
    }

    return (
        <div className="signupandlogin">
            <Grid item xs={2} className="grid">
                <Paper className="paper">
                    <form onSubmit={isLogin ? onLogin : onRegister}>
                        <Typography variant="h6">
                            4TechGram
                        </Typography>
                        {isLogin ? renderLogin() : renderRegister()}
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}