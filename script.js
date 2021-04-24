const addBtnEl = document.getElementById("addBtn");
const inputEl = document.getElementById("input");
const ulEl = document.getElementById("ul")

inputEl.addEventListener("keypress", (e) => {
 if (e.key === "Enter") {
  addElement();
 }
});

addBtnEl.addEventListener("click", () => {
 addElement();
});

function addElement() {
 if (inputEl.value) {
  const liEl = document.createElement("li");
  liEl.addEventListener("click", () => {
   liEl.classList.toggle("done");
  });

  liEl.innerText = inputEl.value;
  inputEl.value = "";
  const btnEl = document.createElement("button");
  btnEl.innerText = "X";
  btnEl.className = "del-btn";
  btnEl.addEventListener("click", () => {
   liEl.remove();
  });
  liEl.appendChild(btnEl)
  ulEl.appendChild(liEl);
 } else {
  alert("You must write something first!");
 }
};