// Translation object for each language
const translations = {
    en: {
        settings: "Settings",
        language: "Language",
        profile: "Profile",
        logOut: "Log Out"
    },
    es: {
        settings: "Configuración",
        language: "Idioma",
        profile: "Perfil",
        logOut: "Cerrar sesión"
    },
    de: {
        settings: "Einstellungen",
        language: "Sprache",
        profile: "Profil",
        logOut: "Ausloggen"
    },
    hi: {
        settings: "सेटिंग्स",
        language: "भाषा",
        profile: "प्रोफ़ाइल",
        logOut: "लॉग आउट"
    },
    ga: {
        settings: "Socruithe",
        language: "Teanga",
        profile: "Cúntas",
        logOut: "Logáil amach"
    }
};

// Function to change the language
function changeLanguage(lang) {
    console.log('Changing language to: ' + lang);

    // Get the translation object for the selected language
    const translation = translations[lang];

    // Update the Settings title
    const settingsTitle = document.getElementById('settings-title');
    if (settingsTitle) settingsTitle.innerText = translation.settings;

    // Update the language button text
    const languageButton = document.querySelector('.language-btn p');
    if (languageButton) languageButton.innerText = translation.language;

    // Update the Profile button text
    const profileButton = document.getElementById('profile-btn');
    if (profileButton) profileButton.innerHTML = `<a href="profile.html" style="text-decoration: none; color: white;"><p class="h5">${translation.profile}</p></a>`;

    // Update the Logout button text
    const logoutButton = document.getElementById('log-out-btn');
    if (logoutButton) logoutButton.innerText = translation.logOut;

    // Close the dropdown after selecting a language
    const languageDropdown = document.getElementById('language-select');
    if (languageDropdown) languageDropdown.style.display = 'none';
}

// Function to show/hide the language selection dropdown
function toggleLanguageSelect() {
    const dropdown = document.getElementById('language-select');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
}

// Log Out function
function logOut() {
    console.log('Logging out...');
    window.location.href = '../html/login.html'; // Adjust the path if necessary
}

// Hide dropdown if the user clicks outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('language-select');
    const languageButton = document.querySelector('.language-btn');

    if (dropdown && languageButton && !languageButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
