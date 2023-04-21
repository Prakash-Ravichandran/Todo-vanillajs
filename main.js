window.onload = function () {
  let form = document.getElementById("form");
  let input = document.getElementById("input");
  let msg = document.getElementById("msg");
  let posts = document.getElementById("posts");

  /* submit event listener */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Button is Clicked");
  });
};
