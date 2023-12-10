import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function SigninPage() {
  const history = useHistory();
 
  const [formData, setFormData] = useState({ email: '', password: '' ,id:''});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/user/' + formData.id)
      .then((res) => {
        if (res.status === 404) {
          console.log("User not found. Enter a valid email.");
          return null;
        }
        return res.json();
      })
      .then((resp) => {
        if(resp.email===formData.email){
        if (resp) {
          if (resp.password === formData.password) {
            console.log("success:true")
            history.push('/Home');
          } else {
            console.log("Incorrect password. Enter valid credentials.");
          }
        }
        }
        else{
          console.log("Enter the valid email.");
        }
      })
      .catch((err) => {
        console.log("Login error");
      });
  };


  return (
    <>
      <form onSubmit={handleSignIn}>
        <div className='uprpage'>
          <h2 >SignIn Page</h2>
        </div>
        <div className='signinpage'>
          <div className='mainpage'>
            <div className="centered-content">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                autoComplete='off'
                required
              />
            </div>
            <div className="centered-content" >
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password'
                autoComplete='off'
                required
              />
            </div>
            <div className="centered-content">
              <label htmlFor="id">Id: </label>
              <input
                type="id"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder='Enter your id'
                autoComplete='off'
                required
              />
            </div>
            <div>
              {/* <Link to="/Home"><button className='firstbutton'>Sign in</button></Link> */}
              <button type="submit">Sign In</button>
              <Link to="/SignupPage"><button className='secondbutton'>Sign up</button></Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SigninPage;
