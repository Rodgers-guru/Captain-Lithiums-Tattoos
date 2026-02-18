// custom.js
// JavaScript functionality for the Captain Lithiums Tattoos website

// Function to display current date and time in UTC
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', formattedDate);
}

displayCurrentDateTime();
