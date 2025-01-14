import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import TodoCard from "../Components/TodoCard";
import CreateNew from "../Components/NewTodo";

const TODOs = [
  {
    id: "1",
    title: "Complete Project Proposal",
    content: "Finish the draft and review it with the team by today evening.",
    dueDate: "2025-01-15",
  },
  {
    id: "2",
    title: "Team Meeting",
    content:
      "Discuss project milestones and delegate tasks for the next sprint.",
    dueDate: "2025-01-16",
  },
  {
    id: "3",
    title: "Buy Groceries",
    content: "Purchase vegetables, milk, and other essentials for the week.",
    dueDate: "2025-01-17",
  },
  {
    id: "4",
    title: "Workout Session",
    content: "Attend the gym at 6 AM for strength training exercises.",
    dueDate: "2025-01-18",
  },
  {
    id: "5",
    title: "Call with Client",
    content:
      "Discuss project requirements and clarify deliverables for the next phase.",
    dueDate: "2025-01-19",
  },
];

interface TODOProps {
  id: string;
  title: string;
  content: string;
  dueDate: string;
}

function Todo() {
  const [todos, setTodos] = useState<TODOProps[]>(TODOs);

  const handleDelete = (id: string) => {
    console.log("Deleting " + id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      py={3}
      gap={3}
    >
      {/* Create New */}
      <CreateNew />

      {/* My TODO List */}
      <Paper
        elevation={3}
        sx={{
          padding: "15px",
          width: "90%",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" textAlign={"center"} mb={2}>
          My Todo List
        </Typography>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            dueDate={todo.dueDate}
            onDelete={handleDelete}
          />
        ))}
      </Paper>
    </Box>
  );
}

export default Todo;
