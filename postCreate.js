const button = document.querySelector(".create-button");
const inputs = document.querySelectorAll("input");

button.onclick = (event) => {
  event.preventDefault();
  const blog = {};
  inputs.forEach((input) => {
    blog[input.name] = input.value;
  });

  fetch("http://localhost:3000/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
