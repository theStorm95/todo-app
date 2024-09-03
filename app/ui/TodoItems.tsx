import {
  Checkbox,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

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

export default function TodoItems() {
  const [checked, setChecked] = useState<number[]>([0]);
  const theme = useTheme();

  const handleToggle = (taskKey: number) => {
    const currentIndex = checked.indexOf(taskKey);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(taskKey);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
        <ListItemButton
          role={undefined}
          dense
          onClick={() => handleToggle(task.id)}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(task.id) !== -1}
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

  return <List sx={{ width: "98%" }}>{jsxTasks}</List>;
}
