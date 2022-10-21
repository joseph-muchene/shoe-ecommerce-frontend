import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginated({ count, page, handleChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        page={page}
      />
    </Stack>
  );
}
