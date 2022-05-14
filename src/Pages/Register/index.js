/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { signInWithPopup ,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Auth/firebase';
import { registerAdmin, registerUser } from '../../Redux/action/authAction';
import { authActions, selectMessage, selectStatus, selectShowMessage } from '../../Redux/slice/authSlice';
import GoogleButton from 'react-google-button';
import { Loading } from '../../Components';
import Modal from '../../Components/Modal';
import imgCar from '../../Assets/img/image 2.png';
import imgLogo from '../../Assets/img/Rectangle 62.png';
import '../../App.css'

const Register = () => {
const { register, handleSubmit } = useForm();
const [showModal, setShowModal] = useState(false);
const showMessage = useSelector(selectShowMessage);
const message = useSelector(selectMessage);
const status = useSelector(selectStatus); 
const dispatch = useDispatch();
const authHandle = auth;
const provider = new GoogleAuthProvider();

const onSubmit = (value) =>{
    // if (value?.role === 'admin') {
        const dataSend = {
            email: value?.email,
            password: value?.password,
            role: 'admin'
        }
        dispatch(registerAdmin(dataSend)).unwrap()
    // }else{
    //     const dataSend = {
    //         email: value?.email,
    //         password: value?.password,
    //     }
    //     dispatch(registerUser(dataSend)).unwrap()
    // }
}

if(showMessage){
    setShowModal(true)
    setTimeout(() => {
        setShowModal(false)
        dispatch(authActions.resetMessage())
    }, 1500);
    dispatch(authActions.setOffShowMessage())
}

const handleGoggle = ()=>{
    signInWithPopup(authHandle ,provider).then((data)=>{
        if (data) {
            const dataSend ={
                email: data?.user?.email,
                password:data?.user?.uid,
            }
            dispatch(registerUser(dataSend)).unwrap()
        }
    }).catch((err)=>{
        console.log(err)
    })
}

  return (
    <>
        {status === 'pending' && <Loading />}
        {(showModal) && <Modal message={message} />}
        <div className='grid grid-cols-2 full-body'>
            <div className='container'>
                <img className='w-full h-full' src={imgCar} alt='' />
            </div>
            <div className='container p-12' >
                <div className='flex flex-col justify-center h-full gap-2'>
                    <div>
                        <img className='w-75' src={imgLogo} alt='icon' />
                    </div>
                    <div className='font-bold text-lg'>Create New Account</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="block text-grey-darker text-md mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-grey-darker" 
                                    id="email" 
                                    type="text" 
                                    placeholder="Email"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-grey-darker text-md mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input 
                                    className="shadow appearance-none border border-red rounded w-full py-1 px-2 text-grey-darker mb-3" 
                                    id="password" 
                                    type="password" 
                                    placeholder="Password"
                                    required
                                    {...register("password")}
                                />
                                 {/* <label className="block text-grey-darker text-md mb-2" htmlFor="password">
                                    Role
                                </label>
                                <select 
                                    {...register("role")} 
                                    className='shadow border border-red rounded w-full py-1 px-2 mb-3'
                                    required
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select> */}
                            </div>
                            <div className="flex items-center justify-between">
                                <button 
                                    className="bg-indigo-500 w-full hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded" 
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                        <GoogleButton
                            onClick={handleGoggle}
                            style={{
                                width: '100%'
                            }}
                        />
                        <p className='text-center py-3'>
                            <small>‘Already have an account? 
                                <Link to='/login' className='text-blue-600 hover:underline'> Login </Link>’
                            </small>.
                        </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register