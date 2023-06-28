const btnFamilia = document.querySelector('#btn-Familia');
const btnSitio = document.querySelector('#btn-Sitio');
const btnHalloween = document.querySelector('#btn-Halloween');
const btnFestaJunina = document.querySelector('#btn-FestaJunina');
const btnFestas = document.querySelector('#btn-Festas');
const btnPlantas = document.querySelector('#btn-Plantas');

btnFamilia.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/Familia.html';
});

btnSitio.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/Sitio.html';
});

btnHalloween.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/Halloween.html';
});

btnFestaJunina.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/FestaJunina.html';
});

btnFestas.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/Festas.html';
});

btnPlantas.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './PaginasDosBotoes/Plantas.html';
});

