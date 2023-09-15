import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography className="pb-10 pl-10" variant="h2" component="div">
        Loading...
      </Typography>
      <CircularProgress size={80} />
    </Box>
  );
};

export default Loading;
