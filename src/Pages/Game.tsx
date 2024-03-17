import { Stack, Box, Paper, Pagination, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { BlogContents } from "../Components";
const GameHome: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <Box className="absolute w-[100vw]">
      <Stack>
        <Paper>hello</Paper>
      </Stack>
    </Box>
  );
};

export default GameHome;
