import axios from 'axios'

export const axiosInstance= axios.create({

    baseURL:"https://pwadminbackend.herokuapp.com/api/"
})