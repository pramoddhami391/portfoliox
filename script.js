const buttons = document.querySelectorAll(".view-more-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.preventDefault(); // stops page from reloading for <a>
    window.open("https://www.pramoddhami.com.np/", "_blank");
  });
});