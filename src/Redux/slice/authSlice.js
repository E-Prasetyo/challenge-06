import { createSlice } from "@reduxjs/toolkit";
import { 
    registerAdmin, registerUser, loginAdmin, loginUser
} from "../action/authAction";

const initialState = {
    isLoggedIn: false,
    user: '',
    // register: false,
    showMessage: false,
    status:'',
    // users: [
    //     { id: '0', email: 'user1@user.com', password: '12345', role: 'user' },
    //     { id: '1', email: 'user2@user.com', password: '12345', role: 'user' },
    //     { id: '2', email: 'admin1@admin.com', password: '12345', role: 'admin'}
    // ],
    role:'',
    message:'',
    test:''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const user = state?.users.find((item) => item.email === action.payload?.email)
            const password = user?.password === action.payload?.password
            if(user?.email){
                if(password){
                    state.isLoggedIn = true;
                    state.role = user?.role
                    state.message = "Login Success"
                    state.user = user?.email
                }else{
                    state.message = "Password Salah"
                }
            }else{
                state.message = "Username Salah"
            }
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        // register(state, action){
        //     const checkEmail = state.users.find((item) => item.email === action.payload.email)
        //     if(!checkEmail){
        //         const data ={
        //             id: state.users.length,
        //             email: action.payload?.email,
        //             password:action.payload?.password,
        //             role: action.payload?.role
        //         }
        //         state.users.push(data)
        //         state.register = true
        //         state.message = "Register Success"
        //     }else{
        //         state.message = "Register Failed, e-mail has been registered "
        //     }
        // },
        // setOffRegister(state){
        //     state.register = false
        // },
        setOffShowMessage(state){
            state.showMessage = false
        },
        // test(state, action){
        //     console.log(action.payload)
        //     state.test = action.payload
        // },
        resetMessage(state){
            state.message = ''
        }
    },
    extraReducers(builder) {
        // regisAdmin
        builder.addCase(registerAdmin.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(registerAdmin.fulfilled, (state, action) => {
            // state.test = action.payload
            state.showMessage = true
            state.message = "Register Success"
            state.status = 'success'
        })
        builder.addCase(registerAdmin.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            // state.test = action.payload
            state.message = "Register Failed"
        })
        // regisCostumer
        builder.addCase(registerUser.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.test = action.payload
            state.showMessage = true
            state.message = "Register Success"
            state.status = 'success'
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            // state.test = action.payload
            state.message = "Register Failed"
        })
        //loginAdmin
        builder.addCase(loginAdmin.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            state.test = action.payload
            state.isLoggedIn = true
            state.showMessage = true
            state.role = action.payload?.role
            state.user = action.payload?.email
            state.message = "Login Success"
            state.status = 'success'
        })
        builder.addCase(loginAdmin.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            // state.test = action.payload
            state.message = "Login Failed"
        })
        //loginUser
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            // state.test = action.payload
            if (action.payload?.access_token) {     
                state.isLoggedIn = true
                state.showMessage = true
                state.role = action.payload?.role
                state.user = action.payload?.email
                state.message = "Login Success"
                state.status = 'success'
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            state.isLoggedIn = true
            // state.test = action.payload
            state.message = "Login Failed"
        })
    }
})

export const selectAuth = (state) => state.auth.isLoggedIn;
export const selectRegister = (state) => state.auth.register;
export const selectShowMessage = (state) => state.auth.showMessage;
export const selectMessage = (state) => state.auth.message;
export const selectStatus = (state) => state.auth.status;
export const selectTest = (state) => state.auth.test;
export const authActions = authSlice.actions;

export default authSlice.reducer