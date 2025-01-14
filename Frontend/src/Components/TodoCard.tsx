import {
  Card,
  Grid2 as Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TodoCardProps {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoCard({
  id,
  title,
  content,
  dueDate,
  onEdit,
  onDelete,
}: TodoCardProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <Card
      elevation={3}
      sx={{
        width: "80%",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        {/* Title */}
        <Grid size={{ xs: 8, lg: 10 }}>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
        </Grid>

        {/* Due Date */}
        <Grid size={{ xs: 4, lg: 2 }} textAlign={"end"}>
          <Typography variant="subtitle1" color="primary">
            Due On: {dueDate}
          </Typography>
        </Grid>

        {/* Content */}
        <Grid size={{ xs: 12, lg: 10 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"justify"}
            sx={{ marginBottom: 2 }}
          >
            {content}
          </Typography>
        </Grid>

        {/* Action Buttons */}
        <Grid size={{ xs: 12, lg: 2 }}>
          <Stack direction={"row"} justifyContent={"end"}>
            <IconButton onClick={handleEdit} color="success">
              <Tooltip title="Edit">
                <EditIcon />
              </Tooltip>
            </IconButton>
            <IconButton onClick={handleDelete} color="error">
              <Tooltip title="Delete">
                <DeleteIcon />
              </Tooltip>
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TodoCard;
