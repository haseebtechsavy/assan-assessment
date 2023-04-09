import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db from '../db';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

const initialState = {
  AdminEmail: '',
  Password: '',
};
const source = require('../../images/loginadmin.png')
const SignIn = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { AdminEmail, Password } = state;
  const history = useHistory();

  // inputchange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!AdminEmail || !Password) {
      toast.error('Please provide value in each input field');
    } else {
      

      setLoading(true);
      // Get the "Users" node from the database
      const usersRef = db.ref('Users');

      // Listen for data changes on the "Users" node
      usersRef.on('value', (snapshot) => {
        const users = snapshot.val();
        let userFound = false;

        setLoading(true);
        // Loop through the records and check if there is a match
        for (const key in users) {
          const user = users[key];
          if (user.AdminEmail === AdminEmail && user.Password === Password) {
            userFound = true;
            break;
          }
        }


        setLoading(false);
        if (userFound) {
          toast.success('Login successful - You are being redirected to dashboard');
          setTimeout(() => history.push('/'), 4000);
        } else {
          toast.error('Invalid email or password');
        }
      });
    }
  };

  return (
    <>
    <toast>
      <ToastContainer
        style={{
          position: 'fixed',
          top: '8%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="overlay"
        style={{
          background:
            '-webkit-linear-gradient(to right, rgba(231, 76, 60, 1), rgba(33, 150, 243, 1))',
          background:
            'linear-gradient(to right, rgba(231, 76, 60, 1), rgba(33, 150, 243, 1))',
        position:'relative',}}
      >

{loading && (
    <div style={{position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'}}>
      <BounceLoader color="#36d7b7" size={200} />
    </div>
  )}

<form  onSubmit={handleSubmit}> 
        <MDBContainer fluid>
          <MDBRow className='align-items-center h-100'>
            <MDBCol col='12' md='6'>
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={AdminEmail} label='Admin Email' id='AdminEmail' name='AdminEmail' type='email' size="lg" onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={Password} label='Password' id='Password' name='Password' type='password' size="lg" onChange={handleInputChange}/>
                  {/* <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type='submit'>
                    Login
                  </MDBBtn>
                  
                  
                  <div>
                    <p className="mt-5">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link></p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol col='12' md='6'>
              <img src={source} alt="placeholder" height={"500px"} width={"500px"} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </form> 
      </div>
      </toast>
    </>
  );
};

export default SignIn;
