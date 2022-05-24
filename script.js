const wheel = document.querySelector("#pie");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const output = document.querySelector("#output");
const spinBtn = document.querySelector(".spin");
const form = document.querySelector("#form-input");
const pie = document.querySelector("#pie");
const names = [];
let randomNum = Math.ceil(Math.random() * 10000);
let fromAngle,
  toAngle,
  fromCoordX,
  fromCoordY,
  toCoordX,
  toCoordY,
  path,
  d,
  test;
const color = [
  "red",
  "brown",
  "yellow",
  "gray",
  "blue",
  "bc8f8f",
  "#48d1cc",
  "#ff6347",
  "#2e8b57",
  "#fff5ee",
  "#696969",
  "#4169e1",
  "#bc8f8f",
  "#90ee90",
  "#b0e0e6",
  "#9370d8",
  "#556b2f",
  "#00ffff",
  "orange",
  "#fff",
  "#ff8c00",
  "#000",
  "red",
];

form.addEventListener("submit", (e) => e.preventDefault());

addBtn.addEventListener("click", () => {
  //Check if the input is not empty
  if (input.value != "") {
    //Saved the inputed names
    names.push(input.value);

    //Display the name with unique color badge
    output.innerHTML += `<span>${
      input.value
    }</span> <span style="background-color: ${
      color[names.length - 1]
    }" class="small-b"></span> <br> <br>`;

    //Display the spin button
    spinBtn.style.opacity = 1;

    //Draw the pie
    pie.innerHTML = "";
    createPie(55, 55, 50, names.length, names);

    //Reset all values
    input.value = "";
  }
});

//Random Spin Event
spinBtn.addEventListener("click", () => {
  wheel.style.transform = `rotate(${randomNum}deg)`;
  randomNum += Math.ceil(Math.random() * 10000);
});

//Draw Pie function
function createPie(cx, cy, r, slices, names) {
  for (var i = 0; i < slices; i++) {
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    fromAngle = (i * 360) / slices;
    toAngle = ((i + 1) * 360) / slices;
    fromCoordX = cx + r * Math.cos((fromAngle * Math.PI) / 180);
    fromCoordY = cy + r * Math.sin((fromAngle * Math.PI) / 180);
    toCoordX = cx + r * Math.cos((toAngle * Math.PI) / 180);
    toCoordY = cy + r * Math.sin((toAngle * Math.PI) / 180);
    d =
      "M" +
      cx +
      "," +
      cy +
      " L" +
      fromCoordX +
      "," +
      fromCoordY +
      " A" +
      r +
      "," +
      r +
      " 0 0,1 " +
      toCoordX +
      "," +
      toCoordY +
      "z";

    test = `para-${slices}`;
    path.setAttributeNS(null, "d", d);
    path.style.fill = `${color[i]}`;
    document.getElementById("pie").appendChild(path);
  }
}
