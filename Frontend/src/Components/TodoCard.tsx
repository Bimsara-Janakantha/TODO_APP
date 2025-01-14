import { Button, Card, Grid2 as Grid, Typography } from "@mui/material";

interface TodoCardProps {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  onDelete: (id: string) => void;
}

function TodoCard({ id, title, content, dueDate, onDelete }: TodoCardProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card
      elevation={5}
      sx={{
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
        <Grid
          size={{ xs: 12, lg: 2 }}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"end"}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={handleDelete}
          >
            Mark as Completed
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TodoCard;
