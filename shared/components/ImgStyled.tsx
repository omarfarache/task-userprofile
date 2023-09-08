/**
 * ImgStyled Component
 *
 * This is a custom styled component for an image element.
 * It provides responsive image sizing based on the screen size (small screens get smaller images).
 *
 */
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const ImgStyled = styled("img")(({ theme }) => {
  // Determine if the screen is small based on breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    // Adjust the width and height based on screen size
    width: isSmallScreen ? "185px" : "175px", // Smaller width on small screens, larger width on larger screens
    height: isSmallScreen ? "185px" : "175px", // Smaller height on small screens, larger height on larger screens
    marginRight: theme.spacing(6.25), // Right margin
    borderRadius: theme.shape.borderRadius, // Apply border radius from the theme
  };
});

export default ImgStyled;
