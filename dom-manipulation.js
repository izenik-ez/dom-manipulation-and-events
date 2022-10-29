// Add a <p> with red text that says "Hey I'm red!"

let body = document.querySelector('body');
let redText = document.createElement('p');
redText.textContent = "Hey I'm red";
redText.style.color = "red";

body.appendChild(redText);

let blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

body.appendChild(blueHeader);

let container = document.createElement('div');
container.style.border = "1px solid black";
container.style.backgroundColor = "pink";

let newDiv = document.createElement('h1');
newDiv.textContent = "I'm in a div";

container.appendChild(newDiv);

let newP = document.createElement('p');
newP.textContent = "ME TOO!";
container.appendChild(newP);

body.appendChild(container);

