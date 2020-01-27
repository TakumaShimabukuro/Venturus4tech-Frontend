import React, { useState, useEffect } from "react"

const Login = ({ name, age }) => {
    const [login, setLogin] = useState("")

    useEffect(() => {
        console.log("alterei o valor")
        
        return (() => {
            console.log("terminei")
        })
    }, [login])

    const onLoginChange = (e) => {
        setLogin(e.target.value)
    }
    
    return (
        <div>
            <input type="text" value={login} onChange={onLoginChange} />
            Login works!! {name} {age}
        </div>
    )
}

export default Login;