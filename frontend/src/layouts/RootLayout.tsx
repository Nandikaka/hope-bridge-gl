import { Stack } from '@mui/material';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";

export const RootLayout = () => {
  return (
    <Stack>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </Stack>
  );
};
