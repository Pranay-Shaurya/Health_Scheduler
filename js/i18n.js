// Internationalization (i18n) support
document.addEventListener('DOMContentLoaded', function() {
  // Default language
  let currentLanguage = localStorage.getItem('language') || 'en';
  
  // Language selector
  const languageSelector = document.getElementById('language-selector');
  if (languageSelector) {
    // Set the selector to the current language
    languageSelector.value = currentLanguage;
    
    // Update language when selector changes
    languageSelector.addEventListener('change', function() {
      currentLanguage = this.value;
      localStorage.setItem('language', currentLanguage);
      updateLanguage(currentLanguage);
    });
  }
  
  // Initial language setup
  updateLanguage(currentLanguage);
  
  // Function to update all text based on selected language
  function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
      
      // Update placeholders for input elements
      if (element.placeholder && translations[language][`${key}_placeholder`]) {
        element.placeholder = translations[language][`${key}_placeholder`];
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }
});

// Translations for different languages
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    book_appointment: 'Book Appointment',
    login: 'Login',
    signup: 'Sign Up',
    
    // Hero section
    hero_title: 'Your Health, Your Schedule',
    hero_subtitle: 'Book appointments with healthcare providers easily and securely.',
    book_now: 'Book Now',
    how_it_works: 'How It Works',
    
    // Features section
    features: 'Features',
    online_booking: 'Online Booking',
    online_booking_desc: 'Book appointments anytime, anywhere through our user-friendly platform.',
    reminders: 'Automated Reminders',
    reminders_desc: 'Never miss an appointment with SMS and email reminders.',
    telehealth: 'Telehealth',
    telehealth_desc: 'Connect with healthcare providers remotely through secure video consultations.',
    security: 'HIPAA Compliance',
    security_desc: 'Your health information is protected with enterprise-grade security.',
    wearable: 'Wearable Integration',
    wearable_desc: 'Sync with your health devices for better appointment management.',
    multilingual: 'Multilingual Support',
    multilingual_desc: 'Access our services in multiple languages for better accessibility.',
    
    // Appointment section
    find_provider: 'Find a Provider',
    all_specialties: 'All Specialties',
    search: 'Search',
    select: 'Select',
    select_date_time: 'Select Date & Time',
    available_times: 'Available Times',
    appointment_type: 'Appointment Type',
    in_person: 'In-Person',
    telehealth_appointment: 'Telehealth',
    confirm_appointment: 'Confirm Appointment',
    
    // How it works section
    create_account: 'Create an Account',
    create_account_desc: 'Sign up securely to access our healthcare scheduling platform.',
    find_provider_step: 'Find a Provider',
    find_provider_desc: 'Search for healthcare providers by specialty, location, or name.',
    choose_time: 'Choose a Time',
    choose_time_desc: 'Select a convenient date and time for your appointment.',
    confirm_details: 'Confirm Details',
    confirm_details_desc: 'Review and confirm your appointment details and receive confirmation.',
    
    // Testimonials
    testimonials: 'What Our Users Say',
    
    // Forms
    email: 'Email',
    password: 'Password',
    forgot_password: 'Forgot Password?',
    full_name: 'Full Name',
    phone: 'Phone',
    confirm_password: 'Confirm Password',
    agree_terms: 'I agree to the Terms and Privacy Policy',
    create_account_btn: 'Create Account',
    
    // Footer
    footer_desc: 'Making healthcare appointments easy and accessible for everyone.',
    quick_links: 'Quick Links',
    contact_us: 'Contact Us',
    newsletter: 'Newsletter',
    newsletter_desc: 'Subscribe to our newsletter for the latest updates.',
    subscribe: 'Subscribe',
    privacy_policy: 'Privacy Policy',
    terms: 'Terms of Service',
    hipaa: 'HIPAA Compliance'
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de',
    services: 'Servicios',
    contact: 'Contacto',
    book_appointment: 'Reservar Cita',
    login: 'Iniciar Sesión',
    signup: 'Registrarse',
    
    // Hero section
    hero_title: 'Tu Salud, Tu Horario',
    hero_subtitle: 'Reserve citas con proveedores de atención médica de manera fácil y segura.',
    book_now: 'Reservar Ahora',
    how_it_works: 'Cómo Funciona',
    
    // Features section
    features: 'Características',
    online_booking: 'Reservas en Línea',
    online_booking_desc: 'Reserve citas en cualquier momento y lugar a través de nuestra plataforma fácil de usar.',
    reminders: 'Recordatorios Automáticos',
    reminders_desc: 'Nunca pierda una cita con recordatorios por SMS y correo electrónico.',
    telehealth: 'Telesalud',
    telehealth_desc: 'Conéctese con proveedores de atención médica de forma remota a través de consultas de video seguras.',
    security: 'Cumplimiento HIPAA',
    security_desc: 'Su información de salud está protegida con seguridad de nivel empresarial.',
    wearable: 'Integración de Wearables',
    wearable_desc: 'Sincronice con sus dispositivos de salud para una mejor gestión de citas.',
    multilingual: 'Soporte Multilingüe',
    multilingual_desc: 'Acceda a nuestros servicios en varios idiomas para una mejor accesibilidad.',
    
    // Appointment section
    find_provider: 'Encontrar un Proveedor',
    all_specialties: 'Todas las Especialidades',
    search: 'Buscar',
    select: 'Seleccionar',
    select_date_time: 'Seleccionar Fecha y Hora',
    available_times: 'Horarios Disponibles',
    appointment_type: 'Tipo de Cita',
    in_person: 'En Persona',
    telehealth_appointment: 'Telesalud',
    confirm_appointment: 'Confirmar Cita',
    
    // How it works section
    create_account: 'Crear una Cuenta',
    create_account_desc: 'Regístrese de forma segura para acceder a nuestra plataforma de programación de atención médica.',
    find_provider_step: 'Encontrar un Proveedor',
    find_provider_desc: 'Busque proveedores de atención médica por especialidad, ubicación o nombre.',
    choose_time: 'Elegir una Hora',
    choose_time_desc: 'Seleccione una fecha y hora conveniente para su cita.',
    confirm_details: 'Confirmar Detalles',
    confirm_details_desc: 'Revise y confirme los detalles de su cita y reciba confirmación.',
    
    // Testimonials
    testimonials: 'Lo que Dicen Nuestros Usuarios',
    
    // Forms
    email: 'Correo Electrónico',
    password: 'Contraseña',
    forgot_password: '¿Olvidó su Contraseña?',
    full_name: 'Nombre Completo',
    phone: 'Teléfono',
    confirm_password: 'Confirmar Contraseña',
    agree_terms: 'Acepto los Términos y la Política de Privacidad',
    create_account_btn: 'Crear Cuenta',
    
    // Footer
    footer_desc: 'Haciendo que las citas médicas sean fáciles y accesibles para todos.',
    quick_links: 'Enlaces Rápidos',
    contact_us: 'Contáctenos',
    newsletter: 'Boletín',
    newsletter_desc: 'Suscríbase a nuestro boletín para recibir las últimas actualizaciones.',
    subscribe: 'Suscribirse',
    privacy_policy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    hipaa: 'Cumplimiento HIPAA'
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    contact: 'Contact',
    book_appointment: 'Prendre Rendez-vous',
    login: 'Se Connecter',
    signup: 'S\'inscrire',
    
    // Hero section
    hero_title: 'Votre Santé, Votre Horaire',
    hero_subtitle: 'Prenez rendez-vous facilement et en toute sécurité avec des prestataires de soins de santé.',
    book_now: 'Réserver Maintenant',
    how_it_works: 'Comment Ça Marche',
    
    // Features section
    features: 'Fonctionnalités',
    online_booking: 'Réservation en Ligne',
    online_booking_desc: 'Prenez rendez-vous n\'importe quand, n\'importe où grâce à notre plateforme conviviale.',
    reminders: 'Rappels Automatisés',
    reminders_desc: 'Ne manquez jamais un rendez-vous grâce aux rappels par SMS et e-mail.',
    telehealth: 'Télésanté',
    telehealth_desc: 'Connectez-vous à distance avec des prestataires de soins de santé via des consultations vidéo sécurisées.',
    security: 'Conformité HIPAA',
    security_desc: 'Vos informations de santé sont protégées par une sécurité de niveau entreprise.',
    wearable: 'Intégration des Objets Connectés',
    wearable_desc: 'Synchronisez avec vos appareils de santé pour une meilleure gestion des rendez-vous.',
    multilingual: 'Support Multilingue',
    multilingual_desc: 'Accédez à nos services dans plusieurs langues pour une meilleure accessibilité.',
    
    // Appointment section
    find_provider: 'Trouver un Prestataire',
    all_specialties: 'Toutes les Spécialités',
    search: 'Rechercher',
    select: 'Sélectionner',
    select_date_time: 'Sélectionner Date et Heure',
    available_times: 'Horaires Disponibles',
    appointment_type: 'Type de Rendez-vous',
    in_person: 'En Personne',
    telehealth_appointment: 'Télésanté',
    confirm_appointment: 'Confirmer le Rendez-vous',
    
    // How it works section
    create_account: 'Créer un Compte',
    create_account_desc: 'Inscrivez-vous en toute sécurité pour accéder à notre plateforme de planification de soins de santé.',
    find_provider_step: 'Trouver un Prestataire',
    find_provider_desc: 'Recherchez des prestataires de soins de santé par spécialité, lieu ou nom.',
    choose_time: 'Choisir une Heure',
    choose_time_desc: 'Sélectionnez une date et une heure convenables pour votre rendez-vous.',
    confirm_details: 'Confirmer les Détails',
    confirm_details_desc: 'Vérifiez et confirmez les détails de votre rendez-vous et recevez une confirmation.',
    
    // Testimonials
    testimonials: 'Ce que Disent Nos Utilisateurs',
    
    // Forms
    email: 'Email',
    password: 'Mot de Passe',
    forgot_password: 'Mot de Passe Oublié?',
    full_name: 'Nom Complet',
    phone: 'Téléphone',
    confirm_password: 'Confirmer le Mot de Passe',
    agree_terms: 'J\'accepte les Conditions Générales et la Politique de Confidentialité',
    create_account_btn: 'Créer un Compte',
    
    // Footer
    footer_desc: 'Rendre les rendez-vous médicaux faciles et accessibles pour tous.',
    quick_links: 'Liens Rapides',
    contact_us: 'Contactez-nous',
    newsletter: 'Newsletter',
    newsletter_desc: 'Abonnez-vous à notre newsletter pour les dernières mises à jour.',
    subscribe: 'S\'abonner',
    privacy_policy: 'Politique de Confidentialité',
    terms: 'Conditions d\'Utilisation',
    hipaa: 'Conformité HIPAA'
  }
}; 