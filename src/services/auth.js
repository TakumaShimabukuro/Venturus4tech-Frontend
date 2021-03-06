import { axios4tech } from "./config"

export const login = async (userLogin, password) => {
    try {
        const response = await axios4tech.post("auth/login", { userLogin, password })
        console.log(response)
        if (response.status >= 200 && response.status < 300) {
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("userId", response.data.userId)
        }
        return response
    } catch (e) {
        return e
    }
}

export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
}