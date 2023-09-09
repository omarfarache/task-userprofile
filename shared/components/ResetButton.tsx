/**
 * ResetButtonStyled Component
 *
 * This is a custom styled component built using Material-UI's Button component.
 * It provides custom styling for a reset button, including responsive styles for small screens.
 */
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Base button styles that apply to all screen sizes
const baseButtonStyles = {
  marginLeft: 20, // Left margin
  width: "50px", // Fixed width
  textAlign: "center", // Centered text
  marginTop: 0, // Top margin
};


const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  // Apply specific styling for small screens using responsive breakpoints
  [theme.breakpoints.down("sm")]: baseButtonStyles,
  // On small screens, use baseButtonStyles for marginLeft, width, textAlign, and marginTop
}));

export default ResetButtonStyled;
