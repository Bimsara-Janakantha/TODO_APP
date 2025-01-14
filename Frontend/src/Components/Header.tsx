import { Box } from "@mui/system";
import ContrastIcon from "@mui/icons-material/Contrast";
import { IconButton, Tooltip, Typography } from "@mui/material";

interface HeaderProps {
  isDarkThemeOn: boolean;
  toggleTheme: () => void;
}

function Header({ isDarkThemeOn, toggleTheme }: HeaderProps) {
  return (
    <Box
      width="fit-parent"
      height="50px"
      bgcolor={isDarkThemeOn ? "black" : "white"}
      padding={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center" // Align items vertically
    >
      <Typography variant="h4" color={isDarkThemeOn ? "white" : "black"}>
        TODO APP
      </Typography>
      <IconButton onClick={toggleTheme}>
        <Tooltip title="Change Theme">
          <ContrastIcon />
        </Tooltip>
      </IconButton>
    </Box>
  );
}

export default Header;
