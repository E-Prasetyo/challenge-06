import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//URL
const register_admin_URL = process.env.REACT_APP_BASE_URL+'/admin/auth/register'
const login_admin_URL = process.env.REACT_APP_BASE_URL+'/admin/auth/login'
const register_user_URL = process.env.REACT_APP_BASE_URL+'/customer/auth/register'
const login_user_URL = process.env.REACT_APP_BASE_URL+'/customer/auth/login'

//regis
const registerAdmin = createAsyncThunk('posts/registerAdmin', async (initialPost) => {
    const response = await axios.post(register_admin_URL, initialPost)
    return response.data
})
const registerUser = createAsyncThunk('posts/registerUser', async (initialPost) => {
    const response = await axios.post(register_user_URL, initialPost)
    return response.data
})

//login
const loginAdmin = createAsyncThunk('posts/loginAdmin', async (initialPost) => {
    const response = await axios.post(login_admin_URL, initialPost)
    return response.data
})
const loginUser = createAsyncThunk('posts/loginUser', async (initialPost) => {
    const response = await axios.post(login_user_URL, initialPost)
    return response.data
})

const loginFilter = (value) => {
    const email = value?.email;
    const index = email.indexOf('@');
    const role = email.slice(index+1, 16);
    const result  = role === 'admin' ? true : false
   return result;
}

export { registerAdmin, registerUser, loginAdmin, loginUser, loginFilter };