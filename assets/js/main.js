// Mobile Menu Start 

// Elements select
const resOpenBtn = document.getElementById('resOpen');
const resCloseBtn = document.getElementById('resClose');
const menu = document.getElementById('nav__middle');

// Function to open the menu
function openMenu() {
  menu.classList.add('open');
  resOpenBtn.style.display = 'none';
  resCloseBtn.style.display = 'inline-block';
}

// Function to close the menu
function closeMenu() {
  menu.classList.remove('open');
  resOpenBtn.style.display = 'inline-block';
  resCloseBtn.style.display = 'none';
}

// Add event listeners
resOpenBtn.addEventListener('click', openMenu);
resCloseBtn.addEventListener('click', closeMenu);

// Close the menu if clicked outside
document.addEventListener('click', function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnOpenBtn = resOpenBtn.contains(event.target);
  const isClickOnCloseBtn = resCloseBtn.contains(event.target);

  if (!isClickInsideMenu && !isClickOnOpenBtn && !isClickOnCloseBtn) {
    closeMenu();
  }
});

// Mobile Menu End
