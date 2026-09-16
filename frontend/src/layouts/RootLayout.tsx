import { Stack } from "@mui/material";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <Stack>
      <header>
        <nav></nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </Stack>
  );
};
