import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        direction='row'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '16px',
        }}
      >
        <Link to='/'>
          <img src={logo} alt='Logo' width='100' />
        </Link>
        <Stack direction='row' spacing={4}>
          <Button variant='text' onClick={() => navigate('/login')}>
            Log In
          </Button>
          <Button variant='contained' onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
