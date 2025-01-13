let input = document.getElementById("input");
let qoshish = document.getElementById("todobtn");
let list = document.getElementById("todo");
let doneList = document.getElementById("delete");
let taskCount = document.getElementById("taskCount");
let doneCount = document.getElementById("doneCount");

let deletedTasksCount = 0;

let tasks = [];

qoshish.addEventListener("click", () => {
  let taskValue = input.value.trim();

  if (taskValue !== "") {
    if (tasks.includes(taskValue)) {
      alert("Bu reja allaqachon bor");
      return;
    }

    tasks.push(taskValue);

    if (list.style.display === "none") {
      list.style.display = "block";
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = taskValue;
    li.appendChild(taskText);

    let doneImg = document.createElement("img");
    doneImg.src = "./images/true.svg";
    doneImg.alt = "Done";
    doneImg.style.cursor = "pointer";

    let deleteImg = document.createElement("img");
    deleteImg.src = "./images/clear.svg";
    deleteImg.alt = "Delete";
    deleteImg.style.cursor = "pointer";

    doneImg.addEventListener("click", () => {
      taskText.style.textDecoration =
        taskText.style.textDecoration === "line-through" ? "" : "line-through";
    });

    deleteImg.addEventListener("click", () => {
      doneList.appendChild(li);
      li.removeChild(doneImg);
      li.appendChild(doneImg);

      deletedTasksCount++;
      doneCount.textContent = deletedTasksCount;

      let currentCount = parseInt(taskCount.textContent);
      taskCount.textContent = currentCount - 1;
    });

    li.appendChild(doneImg);
    li.appendChild(deleteImg);

    list.appendChild(li);
    input.value = "";

    let currentCount = parseInt(taskCount.textContent);
    taskCount.textContent = currentCount + 1;
  }
});