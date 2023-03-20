import axios from "@/utils/axios"

export const userApi = {
    login: (data) => axios.post("/api/user/login", data),
    logout: () => axios.post("/api/user/logout", data),
    register: (data) => axios.post("/api/user/register", data),
    getRegisterCode: (data) => axios.post("/api/user/getRegisterCode", data)

}