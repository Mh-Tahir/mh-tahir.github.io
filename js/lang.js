const ru = document.querySelectorAll('[lang="ru"]');
const en = document.querySelectorAll('[lang="en"]');
const langSwitch = document.querySelector(".language");

function switchLanguage(event) {
  if (event.target.value === "EN") {
    for (let el of ru) {
      el.classList.add("d-none");
    }
    for (let el of en) {
      el.classList.remove("d-none");
    }
  } else {
    for (let el of ru) {
      el.classList.remove("d-none");
    }
    for (let el of en) {
      el.classList.add("d-none");
    }
  }
}

langSwitch.addEventListener("change", switchLanguage);
