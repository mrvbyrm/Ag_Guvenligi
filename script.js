document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('registerBox').style.display = 'none';
  document.getElementById('loginBox').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('warningBox').style.display = 'block';
});
