console.log("README.md:");

const searchQueryURL =
	// "https://api.github.com/repos/gael-src/github-api";
	// "https://api.github.com/repos/gael-src/github-api/contents/README.md";
	// "https://raw.githubusercontent.com/gael-src/github-api/main/README.md";
	// "https://api.github.com/repos/gael-src/github-api/contents/title.txt";

	window.addEventListener("DOMContentLoaded", function (e) {
		fetchAsync();
		return fetch(searchQueryURL)
			.then((result) => result.json())
			.then((response) => {
				console.log("response"), console.log(response);
			})
			.catch((err) => console.log(err));
	});

// ASYNC AWAIT FETCH
async function fetchAsync() {
	const requestOptions = {
		method: "GET",
		redirect: "follow",
	};

	await fetch(
		// "https://api.github.com/repos/gael-src/github-api",
		// "https://api.github.com/repos/gael-src/github-api/contents/README.md",
		"https://raw.githubusercontent.com/gael-src/github-api/main/README.md",
		// "https://api.github.com/repos/gael-src/github-api/contents/title.txt",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			console.log("result"), console.log(result);
		})
		.catch((error) => console.log("error:", error));
}
