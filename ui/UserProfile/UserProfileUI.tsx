// Import necessary dependencies
import React, { ChangeEvent, FormEvent } from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import ImgStyled from "../../shared/components/ImgStyled";
import ButtonStyled from "../../shared/components/ButtonStyled";
import TextFieldStyled from "../../shared/components/TextFieldStyled";
import ResetButtonStyled from "@/shared/components/ResetButton";
import { formatDate } from "@/shared/utils/dateUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@material-ui/core";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
    },
  },
  uploadButton: {
    width: "100%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
}));

// Define props for UserProfileUI component
export interface UserProfileUIProps {
  imgSrc: string;
  setImgSrc: React.Dispatch<React.SetStateAction<string>>;
  fullName: string;
  joinDate: Date;
  fullNameError: string;
  fileUploadError: string | null;
  onChange: (file: ChangeEvent) => void;
  handleFullNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

// UserProfileUI component
const UserProfileUI = ({
  imgSrc,
  setImgSrc,
  fullName,
  joinDate,
  fullNameError,
  fileUploadError,
  onChange,
  handleFullNameChange,
  handleSubmit,
  isLoading,
}: UserProfileUIProps) => {
  // Define styles using the makeStyles hook
  const classes = useStyles();
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust this value to control the centering height
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.container}>
          {/* Profile Picture Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginTop: 2, marginLeft: 2 }}>
              {/* Display the user's profile picture */}
              <ImgStyled src={imgSrc} alt="Profile Pic" />
              <Box>
                {/* Button for uploading a new profile picture */}
                <ButtonStyled
                  component="label"
                  variant="contained"
                  htmlFor="account-settings-upload-image"
                >
                  Upload New Photo
                  <input
                    hidden
                    type="file"
                    onChange={(e) => onChange(e)}
                    accept="image/png, image/jpeg"
                    id="account-settings-upload-image"
                  />
                </ButtonStyled>

                {/* Button for resetting the profile picture */}
                <ResetButtonStyled
                  sx={{ marginLeft: 2 }}
                  color="error"
                  variant="outlined"
                  onClick={() => {
                    setImgSrc("/images/avatars/1.png");
                    // Remove image data from local storage when resetting
                    localStorage.removeItem("imageData");
                  }}
                >
                  Reset
                </ResetButtonStyled>
                {/* Information about allowed image formats and size */}
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Allowed PNG or JPEG
                </Typography>

                {/* Display file upload error message if it exists */}
                {fileUploadError && (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{ marginTop: 2 }}
                  >
                    {fileUploadError}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Spacer */}
          <Grid item xs={12}></Grid>

          {/* Join Date Section */}
          <Grid item xs={12}>
            <Box>
              <Typography variant="h6" sx={{ marginTop: 2, marginLeft: 2 }}>
                {formatDate(joinDate)} 📅
              </Typography>
            </Box>
          </Grid>

          {/* Full Name Section */}
          <Grid item xs={12} md={8}>
            <TextFieldStyled
              fullWidth
              label="Full Name"
              placeholder="Omar Farache"
              defaultValue="Omar Farache"
              onChange={handleFullNameChange}
              value={fullName}
              sx={{ width: "100%" }}
              // Error prop for displaying error state
              error={!!fullNameError}
              // Helper text for error message
              helperText={fullNameError}
            />
          </Grid>

          {/* Email Section (Disabled) */}
          <Grid item xs={12} md={8}>
            <TextFieldStyled
              fullWidth
              type="email"
              label="Email"
              placeholder="omarfarache91@gmail.com"
              defaultValue="omarfarache91@gmail.com"
              disabled
              sx={{ width: "100%" }}
            />
          </Grid>

          {/* Spacer */}
          <Grid item xs={12}></Grid>

          {/* Save and Reset Buttons */}
          <Grid item xs={12}>
            <Box>
              <ButtonStyled
                variant="contained"
                sx={{ marginLeft: 2 }}
                type="submit"
              >
                Save Changes
              </ButtonStyled>
            </Box>
          </Grid>
        </Grid>
      </form>

      {/* Toast notification container */}
      <ToastContainer />
    </CardContent>
  );
};

export default UserProfileUI;
