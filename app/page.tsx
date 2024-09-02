"use client";

import {
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid2,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Task {
  id: number;
  title: string;
  dueDate: Date;
  createdDate: Date;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Do Laundry",
    dueDate: new Date(),
    createdDate: new Date(-1),
  },
  {
    id: 2,
    title: "Clean out the fridge",
    dueDate: new Date(),
    createdDate: new Date(-1),
  },
];

export default function Home() {
  const theme = useTheme();

  const jsxTasks = tasks.map((task) => {
    return (
      <ListItem
        key={task.id}
        secondaryAction={
          <Grid2>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid2>
        }
        sx={{
          bgcolor: "background.paper",
          margin: 1,
          padding: 0,
          borderRadius: theme.spacing(0.5),
        }}
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            id={`${task.id}`}
            primary={task.title}
            secondary={task.dueDate.toDateString()}
          />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
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
          <Button variant="contained">Add Task</Button>
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
          <List sx={{ width: "98%" }}>{jsxTasks}</List>
        </Card>
      </Grid2>
    </Grid2>
  );
}
