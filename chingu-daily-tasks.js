
const root = document.querySelector("#root")


const getTasks = () => {
  fetch('./assets/tasks-example.json')
    .then(response => response.json())
    .then(data => displayTasks(data))
}
