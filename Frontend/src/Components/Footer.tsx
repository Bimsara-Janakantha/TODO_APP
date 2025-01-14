import { Box, Typography } from "@mui/material";

function Footer({ isDarkThemeOn }: { isDarkThemeOn: boolean }) {
  return (
    <Box
      width={"fit-parent"}
      height={"30px"}
      textAlign={"center"}
      alignContent={"center"}
      padding={1}
    >
      <Typography variant="caption" color={isDarkThemeOn ? "white" : "black"}>
        All rights reserved © 2025 PeraBytes
      </Typography>
    </Box>
  );
}

export default Footer;
