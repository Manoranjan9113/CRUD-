import React, { useState } from 'react'
import "../App.css"
import Axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useUserAuth } from '../context/userAuthContext';


const SignUpPage = () => {
  const [username, setUsername] = useState(''); // Use lowercase 'username'
  const [password, setPassword] = useState(''); // Use lowercase 'password'
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const createUserSign = async () => {
    // try {
    //   await signUp(email, password);
    //   navigate("/");
    // } catch (err) {
    //   setError(err.message);
    // }
     const newSignInuser = {
      username: username,
      password: password,
    };

    Axios.post('http://localhost:3001/createSign', newSignInuser) // Use axios.post instead of Axios.post
      .then((response) => {
        console.log(response.data); // Log the response data to the console
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error); // Log any errors to the console
      });
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 SignIn'>
            <div className='SignInBg'>
              <h3>Sign In</h3>
              <input
                className='form-control mt-4'
                type='text'
                placeholder='Username'
                value={username}
       
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                className='form-control mt-3'
                type='Password'
                placeholder='Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Link to="/">
              <button className='btn btn-primary mt-3 me-3'>Back</button>
              </Link>
              <button className='btn btn-primary mt-3' onClick={createUserSign}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
