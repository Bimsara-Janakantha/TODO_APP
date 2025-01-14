import { Button, Grid2 as Grid, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface TodoProp {
  title: string;
  content: string;
  dueDate: string;
}

interface NewTodoProps {
  onAdd: (todo: TodoProp) => void;
}

function CreateNew({ onAdd }: NewTodoProps) {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSend = () => {
    if (title && dueDate && content) {
      onAdd({ title, content, dueDate });
      handleCancel(); // Reset form after adding
    } else {
      console.log("All fields are required");
    }
  };

  const handleCancel = () => {
    // Reset form
    setTitle("");
    setContent("");
    setDueDate("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "90%",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 10 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 2 }}>
          <TextField
            fullWidth
            label="Due Date"
            variant="outlined"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Content"
            variant="outlined"
            value={content}
            multiline
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Stack spacing={2} direction="row" justifyContent="center" gap={10}>
            <Button
              variant="outlined"
              sx={{ width: 150 }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ width: 150 }}
              onClick={handleSend}
            >
              Add New
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateNew;
