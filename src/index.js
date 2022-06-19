const btn = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const special = document.getElementById("special-programs");
const button = document.getElementById("special-button");

function toggleButton() {
  nav.classList.toggle("show");
}

btn.addEventListener("click", toggleButton);

document.addEventListener("DOMContentLoaded", function popOver() {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (element) {
    return new bootstrap.Popover(element);
  });
});

function specialPro() {
  special.innerHTML =
    "HOUR OF MERCY AND VISITATION EVERY SECOND SATURDAY OF THE MONTH. Do not miss it :)";
}
button.addEventListener("click", specialPro);
