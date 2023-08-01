import axios from "axios"
import { API_URL } from "./API_URL"


export const get = (route) => {
    let token = localStorage.getItem('authToken')

    return axios.get(API_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const post = (route, body) => {
    let token = localStorage.getItem('authToken')

    return axios.post(API_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const put = (route, body) => {
    let token = localStorage.getItem('authToken')

    return axios.put(API_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const axiosDelete = (route) => {
    let token = localStorage.getItem('authToken')

    return axios.delete(API_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}