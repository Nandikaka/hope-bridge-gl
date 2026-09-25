import { Stack } from '@mui/material';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar/Navbar';

export const RootLayout = () => {
  return (
    <Stack>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </Stack>
  );
};
