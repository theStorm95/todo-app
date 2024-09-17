import {
  Box,
  Button,
  Grid2,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTime } from "luxon";
import { Task } from "../types";
import _ from "lodash";

interface AddTaskProps {
  tasks: Task[];
  onAddTask: (newTasks: Task) => void;
}

export default function AddTask({ tasks, onAddTask }: AddTaskProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState<DateTime<boolean>>(DateTime.now());

  const theme = useTheme();

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    onAddTask({
      id: Number(_.uniqueId()),
      title: taskName,
      dueDate,
      createdDate: DateTime.now(),
    });

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenModal}>
        Add Task
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "45vh",
            width: "35%",
            bgcolor: "background.paper",
            borderRadius: theme.spacing(1),
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          component="form"
          onSubmit={handleAddTask}
        >
          <Grid2>
            <Typography variant="h5" align="center" gutterBottom>
              Task Creation
            </Typography>
            <TextField
              label="Task Name"
              id="task-name-input"
              margin="normal"
              fullWidth
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              sx={{ paddingBottom: theme.spacing(3) }}
            />
            <DatePicker
              label="Choose Due Date"
              value={dueDate}
              onChange={(date) => {
                date ? setDueDate(date) : setDueDate(DateTime.now());
              }}
            />
          </Grid2>
          <Grid2 display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" variant="outlined">
              Add Task
            </Button>
          </Grid2>
        </Box>
      </Modal>
    </>
  );
}
