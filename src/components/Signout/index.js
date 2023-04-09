import React,{useState} from 'react';
import { useHistory} from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';
import{toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from '../db'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

const initialState={
  SchoolName:"",
  SchoolCode:"",
  AdminEmail:"",
  Password:""

}



// Create a reference to the "Users" node in the database
const usersRef = db.ref("Users");

const source = require('../../images/SignUp.png')
const SignOut = () => {

  const[state,setState]=useState(initialState);


  const{SchoolName,SchoolCode,AdminEmail,Password}=state

  const history = useHistory();

  // inputchange
  const handleInputChange=(e) =>{
    
      const {name, value} = e.target;
      setState({...state, [name]: value});
  };

  //submit method
  const handleSubmit=(e) =>{
    e.preventDefault();
    if(!SchoolName || !SchoolCode || !AdminEmail ||!Password ){
        toast.error("Please provide value in each input field")
    }
    else {
      const user = { SchoolName, SchoolCode, AdminEmail, Password };
      
      // Add the user data to the "Users" node using the push() method
      usersRef.push(user, (err) => {
        if (err) {
          toast.error(err.message);
        } else {
          toast.success("User Added Successfully");
        }
      });
      setTimeout(() => history.push('/'), 4000);
    }
  };

  
  return (
    
    <>
<toast >
<ToastContainer style={{ position: 'fixed' ,top: '8%',left: '50%',transform: 'translate(-50%, -50%)'}}/>
     <div className="overlay" style={{ 
  background: '-webkit-linear-gradient(to right, rgba(231, 76, 60, 1), rgba(33, 150, 243, 1))',
  background: 'linear-gradient(to right, rgba(231, 76, 60, 1), rgba(33, 150, 243, 1))'
}}>

<form  onSubmit={handleSubmit}> 
        <MDBContainer fluid>
          <MDBRow className='align-items-center h-100'>
            <MDBCol col='12' md='6'>
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
                  <p className="text-white-50 mb-5">Please Fille The Fields</p>

                  
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={SchoolName} label='School Name' id='SchoolName' name='SchoolName' type='text' size="lg" onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={SchoolCode} label='School Code' id='SchoolCode' name='SchoolCode' type='text' size="lg" onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={AdminEmail} label='Admin Email' id='AdminEmail' name='AdminEmail' type='email' size="lg" onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={Password} label='Password' id='Password' name='Password' type='password' size="lg" onChange={handleInputChange}/>
                 
                  {/* <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type='submit'>
                    Sign Up
                  </MDBBtn>

                  


                  <p className='mt-4'>Already have an account? <Link to="/signin" className="text-white-50 fw-bold">Sign In</Link></p>
                  
                  <div>
                 
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol col='12' md='6'>
              <img src={source} alt="placeholder" height={"400px"} width={"400px"} style={{marginLeft:"30px"}} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </form>
      </div>
      </toast>
    </>
  );
};

export default SignOut;
