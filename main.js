const input = document.getElementById("input");
const button = document.getElementById("add");
const checkbox = document.createElement('input');
checkbox.type = "checkbox";

let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    
    list.appendChild(listItem);
    list.appendChild(checkbox);
    
    
    input.value = "";
})

remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    let list = document.getElementsByTagName("ul")[0]
    list.removeChild(lastItem)
    input.value = "";
})

checkbox.addEventListener("click", () => {
    listItem.style.setProperty("text-decoration", "line-through");
})