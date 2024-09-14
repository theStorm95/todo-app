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
import TodoItems from "./ui/TodoItems";
import AddTask from "./ui/AddTask";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { useState } from "react";
import { Task } from "./types";

export default function Home() {
  const theme = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTasks = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <Grid2
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: theme.palette.background.default,
          height: "100vh",
        }}
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
            <AddTask tasks={tasks} onAddTask={handleAddTasks} />
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
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <TodoItems tasks={tasks} onDeleteTask={handleDeleteTask} />
          </Card>
        </Grid2>
      </Grid2>
    </LocalizationProvider>
  );
}
