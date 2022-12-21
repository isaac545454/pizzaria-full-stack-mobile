import axios, {AxiosError} from 'axios'
import {parseCookies} from 'nookies'
import {AuthToken} from './error/AuthToken'
import {signOut} from '../context/AuthContext'

export function setupAPIClient(ctx = undefined){
let cookies =  parseCookies(ctx)

const api = axios.create({
    baseURL: "http://localhost:3333/",
    headers:{
        Authorization: `Bearer ${cookies['@nextauth.token']}`
    }
})
api.interceptors.response.use(response=> {
    return response
}, (error: AxiosError) => {
    if(error.response?.status  === 401 ){
        if(typeof window !== undefined){
        signOut()
        }
        else{
            return Promise.reject(new AuthToken())
        }
    }

    return Promise.reject(error)

})
}