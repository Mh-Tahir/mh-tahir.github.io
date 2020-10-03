const ru = document.querySelectorAll('[lang="ru"]');
const en = document.querySelectorAll('[lang="en"]');
const langSwitch = document.querySelector(".language");

function swithLang(event) {
  if (event.target.value === "EN") {
    for (el of ru) {
      el.classList.add("hidden");
    }
    for (el of en) {
      el.classList.remove("hidden");
    }
  } else {
    for (el of ru) {
      el.classList.remove("hidden");
    }
    for (el of en) {
      el.classList.add("hidden");
    }
  }
}

langSwitch.addEventListener("change", swithLang);
