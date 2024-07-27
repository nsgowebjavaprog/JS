// Get HTML Elements
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const forgotPasswordLink = document.getElementById('forgot-password');
const profileForm = document.getElementById('profile-form');

// JSON Data Storage
let userData = [];

// Function to Save Data to JSON File
function saveDataToJSON(data) {
    const jsonString = JSON.stringify(data);
    // Use Local Storage or Cookies to Save Data
    localStorage.setItem('userData', jsonString);
    // Alternatively, you can use the File System Access API (only in Chrome) or Node.js fs module
}

// Load Data from JSON File
function loadDataFromJSON() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        userData = JSON.parse(storedData);
    }
}

// Load Data on Page Load
loadDataFromJSON();

// Remove Duplicates from User Data
function removeDuplicates(data) {
    let unique = [];
    data.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

// Sign Up Functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Validate Email and Password
    if (email && password) {
        // Check if Email Already Exists
        const existingUser = userData.find((user) => user.email === email);
        if (!existingUser) {
            // Add New User to Data
            userData.push({ email, password });
            // Remove Duplicates
            userData = removeDuplicates(userData);
            // Save Data to JSON File
            saveDataToJSON(userData);
            alert('Sign Up Successful!');
        } else {
            alert('Email Already Exists!');
        }
    } else {
        alert('Please Fill All Fields!');
    }
});

// Sign In Functionality
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Validate Email and Password
    if (email && password) {
        // Check if User Exists
        const existingUser = userData.find((user) => user.email === email && user.password === password);
        if (existingUser) {
            alert('Sign In Successful!');
            // Show Profile Settings
            profileForm.style.display = 'block';
        } else {
            alert('Invalid Email or Password!');
        }
    } else {
        alert('Please Fill All Fields!');
    }
});

// Reset Password Functionality
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Enter Your Email:');
    if (email) {
        // Check if User Exists
        const existingUser = userData.find((user) => user.email === email);
        if (existingUser) {
            // Reset Password
            const newPassword = prompt('Enter New Password:');
            if (newPassword) {
                existingUser.password = newPassword;
                // Save Data to JSON File
                saveDataToJSON(userData);
                alert('Password Reset Successful!');
            }
        } else {
            alert('Email Not Found!');
        }
    }
});

// Profile Settings Functionality
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get Profile Fields
    const profileFields = {};
    // Update User Profile
    const existingUser = userData.find((user) => user.email === email);
    if (existingUser) {
        // Update Profile Fields
        existingUser.profile = profileFields;
        // Save Data to JSON File
        saveDataToJSON(userData);
        alert('Profile Updated Successfully!');
    }
});