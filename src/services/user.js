import { axios4tech } from "./config"

export const user = {
    register: async (userName, userLogin, password) => {
        return  await axios4tech.post("user", { userName, userLogin, password })
        // const response = await axios4tech.post("user", { userName, userLogin, password })
        // return await axios4tech.post("/auth/login", {response.data.userLogin, response.data.password})
    }
}
