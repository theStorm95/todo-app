"use client";

import {
  Button,
  Card,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid2 container>
        <Typography variant="h2" gutterBottom>
          Todo App
        </Typography>
      </Grid2>
      <Grid2
        container
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: theme.spacing(100),
          alignItems: "center",
        }}
      >
        <Grid2>
          <Button variant="outlined">Add Task</Button>
        </Grid2>
        <Grid2>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              Filters
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="Filters"
              defaultValue="All"
            >
              <MenuItem>All</MenuItem>
              <MenuItem>Today</MenuItem>
              <MenuItem>Tomorrow</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2
        container
        sx={{ width: theme.spacing(100), justifyContent: "center" }}
      >
        <Card
          sx={{
            width: theme.spacing(100),
            height: "60vh",
            alignItems: "center",
          }}
        >
          <Typography>Todos</Typography>
        </Card>
      </Grid2>
    </Grid2>
  );
}
