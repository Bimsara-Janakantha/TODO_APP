import { RequestHandler } from "express";
import { Todo } from "./models";

let todos: Todo[] = [
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

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    console.log("Readding Todos!");
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const addTodo: RequestHandler = async (req, res, next) => {
  try {
    const { title, content, dueDate } = req.body;
    const len = todos.length;
    const newTodo: Todo = {
      id: todos[len - 1].id + 1,
      title,
      content,
      dueDate,
    };
    todos.push(newTodo);
    console.log("New Todo added successfully!");
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    todos = todos.filter((todo) => todo.id !== id);
    res.status(201).json(todos);
  } catch (error) {
    next(error);
  }
};
