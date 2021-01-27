const API_ROOT = "https://raw.githubusercontent.com/gael-src/github-api/main";

let titleTXT = "Placeholder Title";
let articleTXT = "Placeholder Article";
let articlesJSON = [
  {
    title: "Title 1 in .json file",
    article: "Lorem 1 ipsum dolor sit",
  },
  {
    title: "Title 2 in .json file",
    article: "Lorem 2 ipsum dolor sit",
  },
];

window.addEventListener("DOMContentLoaded", function (e) {
  // TXT FETCH
  titleFetch();
  articleFetch();
  // JSON FETCH
  fetchAsync();
  // TXT OUTPUT
  txtOutput();
  // TXT OUTPUT
  jsonOutput();
});

// TITLE TXT FETCH
function titleFetch() {
  const searchQueryURL = `${API_ROOT}/title.txt`;

  fetch(searchQueryURL)
    .then((response) => response.text())
    .then((result) => {
      console.log("title.txt parsed response"), console.log(result);
      titleTXT = result;
      txtOutput();
    })
    .catch((err) => console.log(err));
}

// ARTICLE TXT FETCH
function articleFetch() {
  const searchQueryURL = `${API_ROOT}/article.txt`;

  fetch(searchQueryURL)
    .then((response) => response.text())
    .then((result) => {
      console.log("article.txt parsed response"), console.log(result);
      articleTXT = result;
      txtOutput();
    })
    .catch((err) => console.log(err));
}

// ASYNC AWAIT JSON FETCH
async function fetchAsync() {
  const searchQueryURL = `${API_ROOT}/articles.json`;

  const requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch(searchQueryURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("article.json parsed response"), console.log(result);
      articlesJSON = result;
      jsonOutput();
    })
    .catch((err) => console.log(err));
}

// TXT OUTPUT
function txtOutput() {
  // console.log("txtOutput");
  const title = document.querySelector(".h3--title");
  const article = document.querySelector(".p--article");
  title.innerHTML = titleTXT;
  article.innerHTML = articleTXT;
}

// JSON OUTPUT
function jsonOutput() {
  const jsonWrapper = document.querySelector(".json--wrapper");

  // console.log("jsonOutput");
  let articles = articlesJSON;

  articles.map((article) => {
    let card = document.createElement("div");
    card.classList.add("art--wrapper");
    jsonWrapper.appendChild(card);

    let titleH3 = document.createElement("h3");
    titleH3.classList.add("h3--title");
    titleH3.innerText = article.title;
    card.appendChild(titleH3);

    let artP = document.createElement("p");
    artP.classList.add("p--article");
    artP.innerText = article.article;
    card.appendChild(artP);
  });
}
