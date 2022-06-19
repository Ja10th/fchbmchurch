const open = document.getElementById("big");
const Lnk = document.getElementById("lnk");
const link = document.getElementById("lnk2");
const linkTwo = document.getElementById("lnk3");
const linkThree = document.getElementById("lnk4");
const openTwo = document.getElementById("big2");
const linkFour = document.getElementById("lnk5");
const linkFive = document.getElementById("lnk6");
const openThree = document.getElementById("big3");

function Open() {
  open.style.display = "block";
  link.style.display = "block";
  Lnk.style.display = "none";
}
Lnk.addEventListener("click", Open);
function Close() {
  open.style.display = "none";
  Lnk.style.display = "block";
  link.style.display = "none";
}
link.addEventListener("click", Close);

// this is sunday section
// space

function OpenTwo() {
  openTwo.style.display = "block";
  linkThree.style.display = "block";
  linkTwo.style.display = "none";
}
linkTwo.addEventListener("click", OpenTwo);
function CloseTwo() {
  openTwo.style.display = "none";
  linkTwo.style.display = "block";
  linkThree.style.display = "none";
}
linkThree.addEventListener("click", CloseTwo);

// Monday section

function OpenThree() {
  openThree.style.display = "block";
  linkFive.style.display = "block";
  linkFour.style.display = "none";
}
linkFour.addEventListener("click", OpenThree);
function CloseThree() {
  openThree.style.display = "none";
  linkFour.style.display = "block";
  linkFive.style.display = "none";
}
linkFive.addEventListener("click", CloseThree);