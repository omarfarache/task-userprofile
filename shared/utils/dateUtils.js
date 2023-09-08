/**
 * formatDate Function
 *
 * This function formats a given date into a user-friendly string.
 *
 */
export const formatDate = (date) => {
    // Define formatting options for the date.
    const options = {
        year: "numeric", // Display the year in numeric format (e.g., 2023).
        month: "long",   // Display the full month name (e.g., "January").
    };

    // Convert the input date to a localized date string using the specified options.
    const formattedDate = `Joined ${new Date(date).toLocaleDateString(undefined, options)}`;

    return formattedDate;
};
