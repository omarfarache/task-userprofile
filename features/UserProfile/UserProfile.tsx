"use client";
// Import required dependencies
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfileUI from "../../ui/UserProfile/UserProfileUI";

const Home = () => {
  // State variables to manage user data and validation errors.
  const [imgSrc, setImgSrc] = useState("/images/avatars/1.png");
  const [fullName, setFullName] = useState("Omar Farache");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // interval time for the circular animation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is ready
    }, 500);

    // Load data from local storage when the component mounts
    const savedImageData = localStorage.getItem("imageData");
    if (savedImageData) {
      setImgSrc(savedImageData);
    }

    const savedFullName = localStorage.getItem("fullName");
    if (savedFullName) {
      setFullName(savedFullName);

      // Set isLoading to false after data is loaded
      setIsLoading(false);
    }
  }, []);

  // Create a new Date object for the user's join date
  const joinDate = new Date();

  // State for validation error message
  const [fullNameError, setFullNameError] = useState("");

  // State variable to track file upload error
  const [fileUploadError, setFileUploadError] = useState<string | null>(null);

  // Function to handle file input change
  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader();
    const { files } = file.target as HTMLInputElement;
    if (files && files.length !== 0) {
      const selectedFile = files[0];
      const allowedTypes = ["image/png", "image/jpeg"];
      
      // Check if the selected file type is allowed
      if (!allowedTypes.includes(selectedFile.type)) {
        // Set the file upload error message
        setFileUploadError(
          "Invalid file type. Please upload a PNG or JPEG file."
        );
        return; // Prevent further processing
      } else {
        // Clear any previous file upload error
        setFileUploadError(null);
      }

      reader.onload = () => {
        // Convert the selected image to a data URL
        const imageData = reader.result as string;
        setImgSrc(imageData);
        localStorage.setItem("imageData", imageData);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Function to handle full name input change
  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFullName = e.target.value;
    setFullName(newFullName);

    // Validate Full Name (not empty)
    if (!newFullName.trim()) {
      setFullNameError("Full Name must not be empty");
    } else {
      setFullNameError(""); // Clear error message if valid
    }

    localStorage.setItem("fullName", newFullName);
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if there's a validation error
    if (fullNameError || fileUploadError) {
      // Show an error toast message
      toast.error("Please fix the validation error before submitting.", {
        position: "top-right",
        autoClose: 3000,
      });
      return; // Prevent form submission
    }

    // Continue with form submission or other actions
    toast.success("Changes saved successfully!", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  // Render the UserProfileUI component with props
  return (
    <UserProfileUI
      imgSrc={imgSrc}
      setImgSrc={setImgSrc}
      fullName={fullName}
      joinDate={joinDate}
      fullNameError={fullNameError}
      fileUploadError={fileUploadError}
      onChange={onChange}
      handleFullNameChange={handleFullNameChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
};

export default Home;
