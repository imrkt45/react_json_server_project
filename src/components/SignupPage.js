import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignupPage() {


  // const [data, setdata] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newdata = { ...user, id: new Date().getTime().toString() }


    fetch("http://localhost:8000/user/", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newdata)
    }).then((res) => {
      console.log("success:true")
      toast.success('well..! Registered successfully')
      history.push('/');
    }).catch((e) => {
      toast.error('few errors: ' + e.message)
    });
  };



  return (
    <>

      <form action="" onSubmit={handleSubmit}>
        <div className='uprpage'>
          <h2 >SignUp Page</h2>
        </div>
        <div className='signinpage'>
          <div className='mainpage'>
            <div className="centered-content">
              <label htmlFor="name">Name: </label>
              <input
                type="name"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder='Enter your name'
                autoComplete='off'
                required
              />
            </div>
            <div className="centered-content">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
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
                value={user.password}
                onChange={handleChange}
                name="password"
                placeholder='Enter your password'
                autoComplete='off'
                required
              />
            </div>
            <div className='buttons'>
              <button className='signupbutton' type="submit">Sign up</button>
              <Link to="/"  ><button className='secondbutton'>Sign in</button></Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignupPage;
