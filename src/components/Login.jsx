import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>Login to Facebook</h3>
      <input type="text"placeholder="email address"name=""id=""/>
      <input type="password"placeholder="password"name=""id=""/>
      <button type="submit">login</button>
      <br></br>
      <br>
      </br>
      <Typography varient ='h3' color='primary'>Login to Facebook</Typography>
      <TextField label='email address'variant='outlined'/> 
      <br>
      </br>
      <TextField label='password'type='password'variant='outlined'/>
    </div>

  )
}

export default Login
