const selectedEl = document.getElementById("selected");
const choicesEl = document.getElementById("choices");
const computerEl = document.getElementById("computer");
const resultEl = document.getElementById("result");

const buttons = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];

let comp = "";

// functions

const generateComputerSelection = () => {
	computerEl.innerHTML = "";
	const randomNumber = Math.floor(Math.random() * 3);
	comp = choices[randomNumber];
	const imgEl = createImgEl(comp);
	computerEl.append(imgEl);
};

const createImgEl = (selection) => {
	let img = document.createElement("img");
	img.setAttribute("src", `./images/${selection}.png`);
	return img;
};

const showSelection = (user) => {
	selectedEl.innerHTML = "";
	const imgEl = createImgEl(user);
	selectedEl.append(imgEl);
	selectedEl.style.display = "block";
	choicesEl.style.display = "none";
};

// events
buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const user = e.target.id;
		showSelection(user);
		generateComputerSelection();
		if (user === comp) {
			resultEl.innerText = "TIED...";
			return;
		}
		const comparison = `${user}${comp}`;
		switch (comparison) {
			case "rockscissors":
				resultEl.innerText = "YOU WIN!!!";
				break;
			case "rockpaper":
				resultEl.innerText = "YOU LOST:(";
				break;
			case "paperrock":
				resultEl.innerText = "YOU WIN!!!";
				break;
			case "paperscissors":
				resultEl.innerText = "YOU LOST:(";
				break;
			case "scissorspaper":
				resultEl.innerText = "YOU WIN!!!";
				break;
			case "scissorsrock":
				resultEl.innerText = "YOU LOST:(";
		}
	});
});

document.getElementById("playAgain").addEventListener("click", () => {
	location.reload();
});
