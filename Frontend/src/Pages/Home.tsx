import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mytodo");
  };

  return (
    <Box
      width={"fit-parent"}
      height={"100%"}
      padding={2}
      display={"flex"}
      gap={2}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        height={100}
        width={100}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={logo}
          alt="Pb Logo"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      </Box>

      <Typography color="primary.dark" variant="h3">
        Welcome Back
      </Typography>

      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        <Typography fontSize={18}>View My TODO</Typography>
      </Button>
    </Box>
  );
}

export default Home;
