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

    formValidation();
  });
};
let data = {};

//accept data
let acceptData = () => {
  data["text"] = input.value;
  console.log("data=" + data.text);
};

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};
