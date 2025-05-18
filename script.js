document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message envoyé. Merci de nous avoir contactés !');
});

// Initialisation de la carte Leaflet OpenStreetMap
const map = L.map('map').setView([35.6971, -0.6308], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
L.marker([35.6971, -0.6308]).addTo(map).bindPopup("Centre d'Imagerie Benameur");

// Switch de langue
const translations = {
  fr: { title: "Centre d'Imagerie Benameur", subtitle: "Radiologie à Oran" },
  ar: { title: "مركز التصوير الطبي بن عمور", subtitle: "الأشعة الطبية في وهران" }
};

document.getElementById('language-switcher').addEventListener('change', function() {
  const lang = this.value;
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('subtitle').textContent = translations[lang].subtitle;
});
