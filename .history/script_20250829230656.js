let userName = "Alice";
let userAge = 20;

if (userAge >= 18) {
  document.getElementById("greeting").textContent =
    `Hello, ${userName}! You are an adult.`;
} else {
  document.getElementById("greeting").textContent =
    `Hello, ${userName}! You are a minor.`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3);
  document.getElementById("total-output").textContent =
    `The total is: $${total}`;
}

let items = ["Apples", "Bananas", "Cherries", "Dates"];
let list = document.getElementById("loop-list");

for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

document.getElementById("color-btn").addEventListener("click", function () {
  let colors = ["lightblue", "lightgreen", "lightyellow", "lightpink"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  document.getElementById("dom-text").textContent =
    "Background changed to " + randomColor + "!";
});
