/**
 * Responsive Styled Button Component
 *
 * This module defines a custom styled button component based on Material-UI's Button component.
 * The button's styling is responsive, adapting to different screen sizes.
 */

// Import necessary dependencies and components from Material-UI
import { styled } from "@mui/material/styles"; 
import Button from "@mui/material/Button"; 
import { ElementType } from "react";
import useMediaQuery from "@mui/material/useMediaQuery"; 


const ButtonStyled = styled(Button)<{
  component?: ElementType;
  htmlFor?: string;
}>(({ theme }):any => {
  // Determine whether the screen size is small (e.g., mobile) using 'useMediaQuery'.
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  // Define styling properties based on screen size.
  const buttonStyles = {
    // Set the width of the button based on screen size.
    width: isSmallScreen ? "100px" : "auto",
    // Set the text alignment of the button based on screen size.
    textAlign: isSmallScreen ? "center" : "left",
    // Set the font size of the button text based on screen size.
    fontSize: isSmallScreen ? "7px" : "auto",
  };

  return buttonStyles;
});


export default ButtonStyled;
