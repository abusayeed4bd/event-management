import React from 'react';

const Login = () => {
    return (
        <div className='d-flex justify-between align-items-center vh-100 bg-dark text-light'>
            <div className='w-50'>
                <img width={"600px"} className='vh-100 ' src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='w-50 me-5'>
                <h2 className='mb-5 fs-1 '>Login</h2>
                <form >
                    <div className="mb-3">
                        <label className='fs-4 fw-400' htmlFor="username">Username</label>
                        <input className='form-control rounded-0 border-0 p-3  bg-secondary' type="text" name="" id="" />
                    </div>

                    <div className="mb-3">
                        <label className='fs-4 fw-400' htmlFor="Password">Password</label>
                        <input className='form-control rounded-0 bg-secondary border-0 p-3' type="text" name="" id="" />
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className='d-flec align-items-center'>
                            <input type="checkbox" name="" id="remember" />
                            <label className='ms-1' htmlFor="remember">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <button className='btn btn-link text-decoration-none text-white'> Forget Password?</button>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-lg rounded-0  bg-secondary px-5 text-white'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;