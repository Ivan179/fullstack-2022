fetch("http://localhost:3000/blogs")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const parentNode = document.querySelector(".main-aside");

    data.forEach((blog) => {
      const node = document.createElement("section");
      node.classList.add("roundable");

      node.innerHTML = `
        <h1>${blog.title}</h1>
        <p>${blog.description}</p>
      `;

      parentNode.appendChild(node);
    });
  });
