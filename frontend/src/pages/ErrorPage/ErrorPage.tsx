import { Link, Stack, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page not found";
      message = "The page you're looking for doesn't exist.";
    } else {
      title = `${error.status} ${error.statusText}`;
      message =
        typeof error.data === "string"
          ? error.data
          : "An unexpected error occurred.";
    }
  }

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>{message}</Typography>
      <Link href="/">Go home</Link>
    </Stack>
  );
};
