
function initMap() {
  const location = { lat: 35.6971, lng: -0.6308 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message envoyé. Merci de nous avoir contactés !');
});

document.getElementById('language-switcher').addEventListener('change', function () {
  const lang = this.value;
  if (lang === "ar") {
    document.body.dir = "rtl";
    document.getElementById("title").textContent = "مركز التصوير الطبي بن عمور";
    document.getElementById("subtitle").textContent = "الأشعة الطبية والتصوير في وهران";
  } else {
    document.body.dir = "ltr";
    document.getElementById("title").textContent = "Centre d'Imagerie Benameur";
    document.getElementById("subtitle").textContent = "Radiologie et imagerie médicale à Oran";
  }
});
