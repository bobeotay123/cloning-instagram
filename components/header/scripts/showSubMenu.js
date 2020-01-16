const hasSubMenu = document.getElementsByClassName('has-submenu')[0];
const submenu = document.getElementsByClassName('submenu')[0];
const mask = document.getElementsByClassName('mask')[0];

function onSubMenuClick() {
  submenu.style.display = 'flex';
  mask.style.display = 'block'
}
function onSubMenuExit() {
  submenu.style.display = 'none';
  mask.style.display = 'none';
}
hasSubMenu.addEventListener('click', onSubMenuClick);
mask.addEventListener('click', onSubMenuExit);