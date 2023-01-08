import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Login = () => {
    const {register , handleSubmit } = useForm();
    const {loginUser , googleSignIn} = useContext(AuthContext) 
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (data) =>{
        loginUser(data.email , data.password)
        .then(res=>{
            navigate("/dashboard");
            toast.success("login Successfully")
        })
        .catch(err =>{
            toast.error(`${err}`)
        })
    }
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(res=>{
            toast.success("Login Successfully")
        })
        .catch(err=>{
            toast.error(`${err}`)
        })
    }
    return (
        <div className=' flex justify-center items-center py-6'  >
            <div className='h-[500px] w-[400px] border px-6 py-6'>
                <h3 className='text-center text-2xl'> Login </h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")}  type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <p className='mt-2'>Forgot Password ? </p>
                    <input type="submit" value="Login" className='btn btn-primary w-full mt-2' />
                    <p className='mt-2'>New to this site ? <Link to="/register" className='text-primary'>create new account </Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                </form>
                <button className='btn btn-primary w-full' onClick={handleGoogleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;