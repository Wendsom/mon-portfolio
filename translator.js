/**
 * @file translator.js
 * @description Gère la traduction de la page entre le français et l'anglais.
 * @author Wendsom COMPAORÉ
 * @version 1.2.0
 */

/**
 * Modifie la langue de la page en fonction de la langue sélectionnée.
 * @param {string} lang - La langue à afficher ('fr' pour français, 'en' pour anglais).
 */
function changeLanguage(lang) {
  // Traduit les éléments de texte principaux
  document.querySelectorAll('[data-fr][data-en]').forEach(element => {
    const translation = element.getAttribute(`data-${lang}`);
    if (translation) {
      // Cas particulier pour les balises <meta> qui utilisent l'attribut 'content'
      if (element.tagName === 'META') {
        element.setAttribute('content', translation);
      } else {
        element.innerHTML = translation;
      }
    }
  });

  // Traduit les placeholders pour les champs de formulaire
  document.querySelectorAll('[data-fr-placeholder][data-en-placeholder]').forEach(element => {
    const translation = element.getAttribute(`data-${lang}-placeholder`);
    if (translation) {
      element.placeholder = translation;
    }
  });

  // Met à jour l'attribut 'lang' de la balise <html> pour l'accessibilité et le SEO.
  document.documentElement.lang = lang;

  // Sauvegarde la langue sélectionnée dans le localStorage.
  localStorage.setItem('language', lang);

  // Met à jour le style des boutons de langue.
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[data-lang='${lang}']`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Traduit les options de pays
  if (typeof translateCountryOptions === 'function') {
    translateCountryOptions(lang);
  }
}

/**
 * Initialise le système de traduction au chargement de la page.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Récupère la langue depuis le localStorage ou utilise 'fr' par défaut.
  const userLang = localStorage.getItem('language') || 'fr';
  changeLanguage(userLang);

  // Ajoute les écouteurs d'événements aux boutons de langue.
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      changeLanguage(btn.getAttribute('data-lang'));
    });
  });
});