import React, { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Login() {
  const [isRegisterMode, setRegisterMode] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('')
  const [alertMessage, setAlertMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { isLoggedIn, login } = useAuth(); // Use the isLoggedIn state and login function from the context
  const navigate = useNavigate();   // Use useNavigate to get the navigate function

  // // Add a state to track if the user is logged in
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (isRegisterMode && password !== Cpassword) {
      setAlertMessage({ type: 'danger', message: 'Password and confirm password do not match' });
      return;
    }

    const userData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };

    const apiUrl = isRegisterMode ? 'https://rms-inky.vercel.app/abc/register' : 'https://rms-inky.vercel.app/abc/login';

    axios.post(apiUrl, userData)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        // Show success alert
        setAlertMessage({ type: 'success', message: `${isRegisterMode ? 'Register' : 'Login'} successful` });

        // Clear input fields after successful submission
        setFname('');
        setLname('');
        setEmail('');
        setPassword('');

        if (res && res.data.msg === 'Login successful') {
          console.log('API Response:', res.data);
          
          // Assuming the email is directly under res.data
          const userEmail = res.data.email;
          console.log('login userEmail:',userEmail)
          // Save user email to localStorage
          localStorage.setItem('userEmail', userEmail);
        
          // Set the user as logged in using the context function
          login();
        
          // Redirect to Profile page
          navigate('/Profile');
        }
      })
      .catch((err) => {
        console.log(err);

        // Show error alert
        setAlertMessage({ type: 'danger', message: 'Invalid email or password' });
      });
  };

  const toggleMode = () => {
    setRegisterMode(!isRegisterMode);
  };

  if (isLoggedIn) {
    return <Navigate to="/Profile" />;
  }

  return (
    <div style={{ backgroundImage: `url(${require('../loginBG.jpeg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <br />
      
      <h2 className="text-center">{isRegisterMode ? 'Register' : 'Login'}</h2>
      <div className="container my-3 text-center" style={{ border: '1px solid white', borderRadius: '10px', width: '40%', background: 'transparent', backdropFilter: 'blur(60px)' }}>
        <form>
          {isRegisterMode && (
            <>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your first name"
                  value={fname}
                  onChange={(event) => setFname(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Your last name"
                  value={lname}
                  onChange={(event) => setLname(event.target.value)}
                />
              </div>
            </>
          )}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="name@example.com"
              aria-describedby="emailHelp"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{paddingRight: '30px'}}
            />
            <span
                onClick={togglePasswordVisibility}
                style={{
                    position: 'absolute',
                    top: '53%',
                    right: '15px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    fontSize: '1.2em',
                }}
            >
                {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          {isRegisterMode && (
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input 
                type={showPassword ? 'text' : 'password'}
                className="form-control" 
                id="exampleInputPassword2" 
                value={Cpassword}
                onChange={(event) => setCpassword(event.target.value)}
                style={{paddingRight: '30px'}}
              />
            </div>
          )}
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            {isRegisterMode ? 'Register' : 'Login'}
          </button>
          {alertMessage && (
            <div className={`alert alert-${alertMessage.type} mt-3`} role="alert">
              {alertMessage.message}
            </div>
          )}
          <p className="mt-3">
            {isRegisterMode ? 'Already have an account? ' : "Don't have an account? "}
            <button type="button" className="btn btn-outline-primary mx-2" onClick={toggleMode}>
              {isRegisterMode ? 'Login' : 'Register'}
            </button>
          </p>
        </form>
      </div>

      <div className="text-center">
      <p>or</p>
      <div className="btn-group btn-group-sm p-2" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg></button>
            <button type="button" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg></button>
            <button type="button" className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg></button>
            <button type="button" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg></button>
          </div>

          </div>

          <div  className="d-grid gap-2 d-md-flex justify-content-md-end  mx-1">
            <Link to="/Admin" className="btn btn-primary btn-sm my-2">Admin Login<i className="bi bi-key">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg></i>
            </Link>
          </div>
    </div>
  );
}

export default Login;
