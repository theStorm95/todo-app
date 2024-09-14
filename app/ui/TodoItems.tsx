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
import { Task } from "../types";

interface TodoItemsProps {
  tasks: Task[];
  onDeleteTask: (newTasks: Task[]) => void;
}

export default function TodoItems({ tasks, onDeleteTask }: TodoItemsProps) {
  const [checked, setChecked] = useState<number[]>([0]);
  const theme = useTheme();

  const handleToggle = (taskKey: number) => {
    console.log(tasks);
    const currentIndex = checked.indexOf(taskKey);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(taskKey);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDeleteTask = (task: Task) => {
    onDeleteTask(
      tasks.filter((item) => {
        if (item.id !== task.id) {
          return item;
        }
      })
    );
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
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteTask(task)}
            >
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
            secondary={task.dueDate.toISODate()}
          />
        </ListItemButton>
      </ListItem>
    );
  });

  return <List sx={{ width: "98%" }}>{jsxTasks}</List>;
}
