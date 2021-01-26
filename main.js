console.log("README.md:");

const searchQueryURL =
	// "https://api.github.com/repos/gael-src/github-api";
	// "https://api.github.com/repos/gael-src/github-api/contents/README.md";
	"https://raw.githubusercontent.com/gael-src/github-api/main/README.md";

window.addEventListener("DOMContentLoaded", function (e) {
	return fetch(searchQueryURL)
		.then((result) => result.json())
		.then((response) => console.log(response))
		.catch((err) => console.log(err));
});
