import axios from 'axios'

export const axiosInstance= axios.create({

    baseURL:"https://pwadmin.herokuapp.com/api/"
})