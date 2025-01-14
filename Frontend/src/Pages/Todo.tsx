import { Box } from "@mui/material";
import TodoCard from "../Components/TodoCard";
import CreateNew from "../Components/NewTodo";

function Todo() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100%"}
      py={3}
      gap={2}
    >
      {/* Create New */}
      <CreateNew />

      {/* My TODO List */}
      <TodoCard />
      <TodoCard />
    </Box>
  );
}

export default Todo;
