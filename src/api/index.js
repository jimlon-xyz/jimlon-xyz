import axios from "@/utils/axios"

export const userApi = {
    signIn: (data) => axios.post("/api/user/signIn", data),
    signUp: (data) => axios.post("/api/user/signUp", data),
    getSignUpCode: (data) => axios.post("/api/user/getSignUpCode", data)

}