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

//data object to store textarea value as data.text=value
let data = {};
//accept data
let acceptData = () => {
  data["text"] = input.value;
  console.log("data=" + data.text);
  createPost();
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

//createPost
let createPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
   <i onClick="editPost(this)" class="fas fa-edit"></i>
   <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
  `;
  input.value = "";
};

//deletePost
let deletePost = (e) => {
  //e.parentElement => span
  //e.parentElement.parentElement => div
  e.parentElement.parentElement.remove();
};
// editPost
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
