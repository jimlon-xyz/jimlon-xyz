import axios from 'axios'
import { Message } from 'view-ui-plus'

axios.interceptors.request.use(request => {
    return request
}, error => {
    Message.error('请求失败，网络请求错误')
})

axios.interceptors.response.use(({status, data}) => {
    if (status == 200) {
        if (data.errCode > 0) {
            Message.error(data.errMsg)
            return Promise.reject(new Error(data.errMsg))
        }
        return data
    }
}, error => {
    Message.error('请求失败，网络响应错误')
})

export default axios