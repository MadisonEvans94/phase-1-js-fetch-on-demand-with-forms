const init = () => {
	let tempVal;
	const inputForm = document.querySelector("form");
	inputForm.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(document.querySelector("#searchByID").value);
		tempVal = document.querySelector("#searchByID").value;
		fetch(`http://localhost:3000/movies/${tempVal}`)
			.then((response) => response.json())
			.then((data) => {
				const title = document.querySelector("section#movieDetails h4");
				const summary = document.querySelector("section#movieDetails p");

				title.innerText = data.title;
				summary.innerText = data.summary;
			});
	});
};

document.addEventListener("DOMContentLoaded", init);
