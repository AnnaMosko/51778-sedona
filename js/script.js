var link = document.querySelector(".booking-button");
var popup = document.querySelector(".form");
var form = popup.querySelector("form");
var startDate = popup.querySelector("[name=start-date]");
var endDate = popup.querySelector("[name=end-date]");

try {
  storage = localStorage.getItem("start-date");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("form-open")) {
    popup.classList.remove("form-open");
    popup.classList.remove("form-error");
  } else {
    popup.classList.add("form-open");

    if (storage) {
      startDate.value = storage;
      endDate.focus();
    } else {
      startDate.focus();
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!startDate.value || !endDate.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("startDate", startDate.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-open")) {
      popup.classList.remove("form-open");
      popup.classList.remove("form-error");
    }
  }
});
