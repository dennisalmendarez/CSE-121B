(function () {
  var users = ["Tyler", "Sarah", "Dan"]

  function getUsers() {
    return users
  }

  APP.getUsers = getUsers
})()

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.textContent = temple.templeName;

    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

displayTemples(temples);