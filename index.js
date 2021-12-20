const todoInput = document.querySelector("#todo-input");
const todosContainer = document.querySelector(".todos");

const todos = [];

todoInput.addEventListener("keyup", (event) => {
  if (event.keyCode == 13 && event.target.value.trim() !== "") {
    todos.push({ value: event.target.value, checked: false });
    newTodo(event.target.value);
    todoInput.value = "";
  }
});

function newTodo(value) {
  const todo = document.createElement("div");
  const todoText = document.createElement("p");
  const todoCheckBox = document.createElement("input");
  const todoCheckBoxLabel = document.createElement("label");
  const todoCross = document.createElement("span");

  let obj = todos.find((t) => t.value === value);

  todoText.textContent = value;
  todoCheckBox.type = "checkbox";
  todoCheckBox.name = "checkbox";
  todoCheckBoxLabel.htmlFor = "checkbox";

  todoCheckBoxLabel.addEventListener("click", (event) => {
    // todoCheckBox.checked = false;

    if (todoCheckBox.checked) {
      todoCheckBox.checked = false;
      todoText.style.textDecoration = "none";
      todoCheckBoxLabel.classList.remove("active");
     obj.checked = false;
      console.log(todos);
    } else {
      todoCheckBox.checked = true;
       obj.checked = true;
      todoText.style.textDecoration = "line-through";
      todoCheckBoxLabel.classList.add("active");
    }
  });

  todoCross.textContent = "X";
  todoCross.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  todo.classList.add("todo");
  todoCheckBoxLabel.classList.add("circle");
  todoCross.classList.add("cross");

  todo.appendChild(todoCheckBox);
  todo.appendChild(todoCheckBoxLabel);
  todo.appendChild(todoText);
  todo.appendChild(todoCross);

  todosContainer.appendChild(todo);
}

function changeTheme() {
  document.body.classList.toggle("light");
}
