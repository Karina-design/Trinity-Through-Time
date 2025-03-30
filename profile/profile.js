// Tab Switcher Function
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

// Default Tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('explore');

    // Check if there's an image in localStorage and set it
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        document.getElementById('profile-img').src = savedImage;
    }
});

// Save Name and Surname to localStorage
function saveName() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    // Save name to localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
}

// Image Preview Function
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const imgElement = document.getElementById('profile-img');
            imgElement.src = reader.result;

            // Save image to localStorage
            localStorage.setItem('profileImage', reader.result);
        }
        reader.readAsDataURL(file);
    }
}
window.onload = function () {
    // Retrieve user data from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');

    // Populate the profile fields with the retrieved data
    if (firstName && lastName && email) {
        document.getElementById('first-name').value = firstName;
        document.getElementById('email').value = email;
    }
};

// Tab switching function
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';  // Hide all tab contents
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';  // Show selected tab content
    }
}