import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Singup = () => {
    const {register , handleSubmit} = useForm();
    const {handleSignUp,updateUserProfileName,googleSignIn} = useContext(AuthContext)
    const handleRegister = (data) =>{
        handleSignUp(data.email , data.password)
        .then((createduser)=>{
            updateUserProfileName(data.name)
            .then(res=>{
                toast.success("user created successfully")
            })
        })
        .catch(err=>{
            console.log(err)
            toast.error(`${err}`)
        })
    }
    // for google singIn
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            toast.success("login Successfull")
        })
        .catch(err=>{
            toast.error(`${err}`)
        })
    }
    return (
        <div className=' flex justify-center items-center py-6'  >
            <div className='h-[500px] w-[400px] border px-6 py-6'>
                <h3 className='text-center text-2xl'> SignUp</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <p className='mt-2'>Forgot Password ? </p>
                    <input type="submit" value="SignUp" className='btn btn-primary w-full mt-2' />
                    <p className='mt-2'>New to this site ? <Link to="/login" className='text-primary'>create new account </Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                </form>
                <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>Login With Google</button>
            </div>
        </div>
    );
};

export default Singup;