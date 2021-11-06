import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home'

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <img src="https://i.ibb.co/VmtYRH7/image.png" alt="" />
          <button onClick={handleGoogleLogin} className="text-white font-bold bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Google Login</button>

        </div>
      </div>
    </section>
  );
};

export default Login;