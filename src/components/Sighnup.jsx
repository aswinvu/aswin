import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Sighnup = () => {
  return (
    <div>
        
        <Typography varient ='h3' color='primary'>Sign in Details</Typography>
      < TextField label='NAME'variant='outlined'/> 
      <br>
      </br>
      <TextField label='email address'type='password'variant='outlined'/>
      <br>
      </br>
      <TextField label='phone number'type='password'variant='outlined'/>
      <br>
      </br>
      <TextField label='password'type='password'variant='outlined'/>
      <br>
      </br>
      <Button type='submit' variant='outlined'>Sign In</Button>
    </div>

      
    
  )
}

export default Sighnup
