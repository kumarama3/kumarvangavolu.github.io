// Get references to HTML elements
const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

// Function to add theme class to body and button
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
}

// Check if the theme is dark
const isDark = () => body.classList.contains('dark');

// Function to set theme
const setTheme = (bodyClass, btnClass) => {
  // Remove existing theme classes
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  // Add new theme classes
  addThemeClass(bodyClass, btnClass);

  // Store theme settings in localStorage
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
}

// Toggle between light and dark themes
const toggleTheme = () => {
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');
}

// Event listener for theme toggle button
btnTheme.addEventListener('click', toggleTheme);

// Function to display/hide navigation list
const displayList = () => {
  const navUl = document.querySelector('.nav__list');
  
  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
}

// Event listener for hamburger menu button
btnHamburger.addEventListener('click', displayList);

// Function to toggle display of scroll-to-top button
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
}

// Event listener for scroll event
document.addEventListener('scroll', scrollUp);
