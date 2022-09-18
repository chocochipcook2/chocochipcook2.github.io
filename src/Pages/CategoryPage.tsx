import { Stack, Box, Paper, Pagination, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { BlogContents } from "../Components";
const CategoryPage: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <Box>
      <Stack>
        <Paper>{BlogContents(page)}</Paper>
        <Paper sx={{ height: 30 }}>
          <Pagination page={page} onChange={(e, v) => setPage(v)} count={10} />
        </Paper>
      </Stack>
    </Box>
  );
};

export default CategoryPage;
