import React, { useState } from 'react'

export default function SignUp() {


    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""})

     const handleSubmit=async(e)=>{
      e.preventDefault();
      const response=await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})

      });
      const json=await response.json()
      console.log(json)
          
      if(!json.success){
        alert("enter valid credentials")
      }

     }
     const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
     }


  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInput">Address</label>
    <input type="text" className="form-control" id="exampleInput"  name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <a href='/login' className='m-3 btn btn-danger'>Already a user</a>
</form>
</div>
    </>
  )
}
