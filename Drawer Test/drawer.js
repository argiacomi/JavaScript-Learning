var mbo = document.querySelector('.menu-btn-open');
var mbc = document.querySelector('.menu-btn-closed');
var box = document.getElementById('menu');
var drawerOpen = true;

mbo.addEventListener('click', () => {
  box.style.left = '-250px';
  drawerOpen = false;
});

mbc.addEventListener('click', () => {
  if (!drawerOpen) {
    box.style.left = '0px';
    drawerOpen = true;
  }
});
