const form = document.getElementById('phishingForm');
const result = document.getElementById('result');
const sharedInfo = document.getElementById('sharedInfo');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  sharedInfo.innerHTML = '';
  if (name) sharedInfo.innerHTML += `<li>Ad Soyad: ${name}</li>`;
  if (email) sharedInfo.innerHTML += `<li>E-posta: ${email}</li>`;
  if (phone) sharedInfo.innerHTML += `<li>Telefon: ${phone}</li>`;
  if (address) sharedInfo.innerHTML += `<li>Adres: ${address}</li>`;

  form.style.display = 'none';
  result.style.display = 'block';
});

function googleLoginFake() {
  alert("⚠️ Bu, kimlik avı farkındalık simülasyonudur. Gerçek Google sayfası değildir!");
}
