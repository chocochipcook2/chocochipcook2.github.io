import { Stack, Box, Paper, Pagination } from "@mui/material";
import * as React from "react";
import { Chap03, Chap04 } from "../Posts";
const BlogPage: React.FC = () => {
  return (
    <Box>
      <Stack>
        <Paper>
          <Chap03 />
          <Chap04 />
        </Paper>
        <Paper sx={{ height: 30 }}>
          <Pagination count={10} />
        </Paper>
      </Stack>
    </Box>
  );
};

export default BlogPage;
