//resets page position
window.onbeforeunload = function () {
  setTimeout('', 7000);
  console.log("scroll");
  window.scrollTo(0, 0);
}