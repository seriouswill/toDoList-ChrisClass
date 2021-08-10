const input = document.getElementById("input");
const button = document.getElementById("add");
const checkbox = document.createElement('input');
checkbox.type = "checkbox";

let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    
    list.appendChild(listItem);
    
    
    
    input.value = "";
})

remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    let lastCheckbox = document.querySelectorAll("checkbox")
    let list = document.getElementsByTagName("ul")[0]
    list.removeChild(lastItem)
    list.removeChild(lastCheckbox);
    input.value = "";
})

list.addEventListener("click", (e) => {
    const li = e.target;
    const ul = li.parentNode;
    ul.removeChild(li);
})

checkbox.addEventListener("click", () => {
    listItem.style.setProperty("text-decoration", "line-through");
})