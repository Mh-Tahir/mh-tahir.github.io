const ru = document.querySelectorAll('[lang="ru"]');
const en = document.querySelectorAll('[lang="en"]');
const langSwitch = document.querySelector(".language");

function switchLanguage(event) {
  if (event.target.value === "EN") {
    for (let el of ru) {
      el.classList.add("hidden");
    }
    for (let el of en) {
      el.classList.remove("hidden");
    }
  } else {
    for (let el of ru) {
      el.classList.remove("hidden");
    }
    for (let el of en) {
      el.classList.add("hidden");
    }
  }
}

langSwitch.addEventListener("change", switchLanguage);
