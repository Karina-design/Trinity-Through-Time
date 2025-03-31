// Objeto de traducción para cada idioma
const translations = {
    en: {
        settings: "Settings",
        language: "Language",
        selectLanguage: "Select your preferred language.",
        profile: "Profile",
        logOut: "Log Out"
    },
    es: {
        settings: "Configuración",
        language: "Idioma",
        selectLanguage: "Selecciona tu idioma preferido.",
        profile: "Perfil",
        logOut: "Cerrar sesión"
    },
    de: {
        settings: "Einstellungen",
        language: "Sprache",
        selectLanguage: "Wählen Sie Ihre bevorzugte Sprache.",
        profile: "Profil",
        logOut: "Ausloggen"
    },
    hi: {
        settings: "सेटिंग्स",
        language: "भाषा",
        selectLanguage: "अपनी पसंदीदा भाषा चुनें।",
        profile: "प्रोफ़ाइल",
        logOut: "लॉग आउट"
    },
    ga: {
        settings: "Socruithe",
        language: "Teanga",
        selectLanguage: "Roghnaigh do theanga is fearr leat.",
        profile: "Cúntas",
        logOut: "Logáil amach"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    console.log('Language changed to: ' + lang);

    // Actualiza el contenido de la página con las traducciones del idioma seleccionado
    const translation = translations[lang];

    // Cambia los textos de los elementos con los IDs correspondientes
    document.getElementById('settings-title').innerText = translation.settings;
    document.getElementById('language-title').innerText = translation.language;
    document.getElementById('language-description').innerText = translation.selectLanguage;
    document.getElementById('profile-btn').innerText = translation.profile;
    document.getElementById('log-out-btn').innerText = translation.logOut;

    // Cambiar el texto del botón de idioma
    document.querySelector('.language-btn').innerText = translation.language;

    // Cerrar el desplegable después de seleccionar un idioma
    document.getElementById('language-select').style.display = 'none';
}

// Función para mostrar/ocultar el menú de selección de idioma
function toggleLanguageSelect() {
    const dropdown = document.getElementById('language-select');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Función de Log Out
function logOut() {
    console.log('Logging out...');
    window.location.href = '/login.html'; // Ajusta la ruta si es necesario
}

// Función para ocultar el desplegable si el usuario hace clic fuera de él
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('language-select');
    const languageButton = document.querySelector('.language-btn');
    
    if (!languageButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
