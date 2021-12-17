// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#my-done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function addDoneItem(text) {
  let doneItem = document.createElement("li");
  doneItem.innerHTML = `
    <label class='checked' for="done">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  done.appendChild(doneItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value;

  if (inputValue.trim().length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});
// 當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const inputValue = input.value;
    if (inputValue.trim().length > 0) {
      addItem(inputValue);
      input.value = "";
    }
  }
});

// Delete and check
// 當使用者點擊完成的 todo 時，該項目會被送進 Done 清單
list.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    addDoneItem(target.innerText);
    parentElement.remove();
  }
});
// Done 清單中的項目也要能夠被刪除
done.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  }
});
