import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { createdUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onSubmit = data => {
        console.log(data)
        createdUser()


    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-[#786c53] to-[#89a293]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center   p-6 bg-gradient-to-r from-[#786c53] to-[#89a293] ">
                    <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                    <img src={logo} className='w-[300px] h-auto ' />

                    <p className='text-base-300 mt-5'>ALready Have an Account?
                        <Link to='/login'><span className='text-primary'> LogIn here</span> </Link>
                    </p>

                    <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>

                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                    <br /><br />
                </div>
                <div className="card  max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='mb-2 text-red-600'> {error}</p>
                        <p className='mb-2 text-red-600'> {success}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name"
                                    {...register("name", { required: true })}
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name='photo' placeholder="Url"
                                    {...register("photo", { required: true })} className="input input-bordered" required />

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name='email' placeholder="Email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password'
                                    {...register("password", { required: true })} placeholder="Password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password'
                                    {...register("confirmpassword", { required: true })} placeholder="Password" className="input input-bordered" required />
                            </div>


                            <div className="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;