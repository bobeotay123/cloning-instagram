const header = document.getElementsByClassName("header")[0];
const searchBar = document.getElementsByClassName('search-bar')[0];
const textLogo = document.getElementsByClassName('title')[0];
const logoImage = document.getElementsByClassName('logo-image')[0];
const subMenu = document.getElementsByClassName('submenu')[0];

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 120) {
    textLogo.style.display = 'none'
    logoImage.style.borderRight = 'none';
    header.style.height = '52px';
    searchBar.style.margin = '0px 0px 0px 121px';
    subMenu.style.top = '52.2px';
    header.style.transition = "height 0.3s";
    textLogo.style.transition = "all 0.3s";
    logoImage.style.transition = "border-right 0.3s"
  }
  if (this.window.pageYOffset === 0) {
    header.style.height = '77px';
    textLogo.style.display = 'block';
    logoImage.style.borderRight = '1.5px solid black';
    searchBar.style.margin = "0px";
    subMenu.style.top = '70px';
    header.style.transition = "height 0.3s";
    textLogo.style.transition = "all 0.3s";
    logoImage.style.transition = "border-right 0.3s"
  }
});