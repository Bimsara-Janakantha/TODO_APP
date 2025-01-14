import { Box, Typography } from "@mui/material";

interface HomeProps {
  isDarkThemeOn: boolean;
}

function Home({ isDarkThemeOn }: HomeProps) {
  return (
    <Box width={"fit-parent"} height={"100%"}>
      <Typography color={isDarkThemeOn ? "white" : "black"}>
        This is content Area
      </Typography>
    </Box>
  );
}

export default Home;
