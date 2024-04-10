import { AppBar, Toolbar, Typography ,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <AppBar>
        <Toolbar>

        
         <Typography variant='h4'>BLOG &nbsp;&nbsp;&nbsp; &nbsp;</Typography>
         
         <Button variant="contained" color="secondary">
          <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
            Login
            </Link>
            </Button>
            &nbsp;&nbsp;&nbsp; &nbsp;

<Button variant="contained" color="secondary">
          <Link to={'/signup'} style={{textDecoration:'none', color:'white'}}>
            Sign up
            </Link>
            </Button>
            &nbsp;&nbsp;&nbsp; &nbsp;


            <Button variant="contained" color="secondary">
          <Link to={'/card'} style={{textDecoration:'none', color:'white'}}>
            card view
            </Link>
            </Button>



    
    </Toolbar>
    </AppBar>
  )
}