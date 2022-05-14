
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signInWithPopup ,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Auth/firebase';
import { 
    authActions, selectAuth, selectMessage, selectStatus, selectShowMessage, 
    // selectTest
} from '../../Redux/slice/authSlice'
import { loginAdmin, loginUser } from '../../Redux/action/authAction';
import GoogleButton from 'react-google-button';
import { Modal, Loading } from '../../Components';
import imgCar from '../../Assets/img/image 2.png';
import imgLogo from '../../Assets/img/Rectangle 62.png';
import '../../App.css';

const Login = () => {
const { register, handleSubmit } = useForm();
const [showModal, setShowModal] = React.useState(false);
const navigate = useNavigate()
const authenticator = useSelector(selectAuth);
const showMessage = useSelector(selectShowMessage);
const status = useSelector(selectStatus);
const message = useSelector(selectMessage);
const dispatch = useDispatch();
const authHandle = auth;
const provider = new GoogleAuthProvider();

const onSubmit = (value) =>{
    // if(loginFilter(value)){
        const dataSend = {
            email: value?.email,
            password: value?.password,
        }
        dispatch(loginAdmin(dataSend)).unwrap()
    // }else{
    //     const dataSend = {
    //         email: value?.email,
    //         password: value?.password,
    //     }
    //     dispatch(loginUser(dataSend)).unwrap()
    // }
    // if (value?.role === 'admin') {
    //     const dataSend = {
    //         email: value?.email,
    //         password: value?.password,
    //     }
    //     dispatch(loginAdmin(dataSend)).unwrap()
    // }else{
    //     const dataSend = {
    //         email: value?.email,
    //         password: value?.password,
    //     }
    //     dispatch(loginUser(dataSend)).unwrap()
    // }
}  

if(showMessage){
    setShowModal(true)
    setTimeout(() => {
        setShowModal(false)
        dispatch(authActions.resetMessage())
        if(authenticator) {
            return navigate('/') 
        }
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
            dispatch(loginUser(dataSend)).unwrap()
        }
    }).catch((err)=>{
        console.log(err , "ini adalah err")
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
                    <div className='font-bold text-lg'>Welcome Admin BCR</div>
                    <div className="flex flex-col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-md mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-grey-darker" 
                                id="email" 
                                type="text" 
                                placeholder="Email"
                                name='email'
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
                        <div className="flex flex-col items-center justify-between gap-5">
                        <button type='submit' className="bg-indigo-500 w-full hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                       
                        </div>
                    </form>
                    <div className='py-3'>
                        <GoogleButton
                            onClick={handleGoggle}
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login