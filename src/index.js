import Handlebars from './templates/handlebars.hbs';
import menuData from "./menu.json"

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const menuContainer = document.querySelector('.js-menu');

const applyTheme = (theme) => {
  document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  document.body.classList.add(theme);
  themeSwitchToggle.checked = theme === Theme.DARK;
  localStorage.setItem('theme', theme);
};

themeSwitchToggle.addEventListener('click', () => {
  const selectedTheme = themeSwitchToggle.checked ? Theme.DARK : Theme.LIGHT;
  applyTheme(selectedTheme);
});

const init = () => {
  const savedTheme = localStorage.getItem('theme') || Theme.LIGHT;
  applyTheme(savedTheme);

  const menuHTML = Handlebars({ menuItems: menuData });
  menuContainer.innerHTML = menuHTML;
};

init();
