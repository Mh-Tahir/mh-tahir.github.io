const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
  }
}

toggleSwitch.addEventListener("change", switchTheme);
