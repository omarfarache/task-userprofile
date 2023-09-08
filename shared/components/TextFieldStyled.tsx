/**
 * TextFieldStyled Component
 *
 * This is a custom styled component built using Material-UI's TextField component.
 * It allows for responsive styling based on the screen size (small screens get full width).
 * ```
 */
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  // Determine if the screen is small based on breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return {
    // Adjust the width based on screen size
    width: isSmallScreen ? "100%" : "auto", // Full width on small screens, auto width on larger screens
    marginLeft: isSmallScreen ? 0 : theme.spacing(2), // Adjust left margin on small screens, use default margin on larger screens
    marginRight: isSmallScreen ? 0 : theme.spacing(2), // Adjust right margin on small screens, use default margin on larger screens
  };
});

export default TextFieldStyled;
