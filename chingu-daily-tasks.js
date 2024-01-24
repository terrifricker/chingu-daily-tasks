
const root = document.querySelector("#root")


const getTasks = () => {
  fetch('./assets/tasks-example.json')
    .then(response => response.json())
    .then(data => displayTasks(data))
}

const displayTasks = (data) => {
  data.map((category) => {
    let categoryElement = document.createElement("div")
    categoryElement.className="category"
    let categoryHeadingElement = document.createElement("h2")
    categoryHeadingElement.className="category-heading"
    categoryHeadingElement.innerHTML = category.categoryName
    categoryElement.appendChild(categoryHeadingElement)

    category.activityTypes.map(activityName => {
      let activityElement = document.createElement("div")
      activityElement.className="activity"
      let activityHeadingElement = document.createElement("h3")
      activityHeadingElement.className="activity-heading"
      activityHeadingElement.innerHTML = activityName.activityName
      activityElement.appendChild(activityHeadingElement)

      activityName.Tasks.map(singleTask => {
        let taskElement = document.createElement("div")
        taskElement.className="task"
        let taskNameElement = document.createElement("p")
        taskNameElement.className="task-name"
        taskNameElement.innerHTML=singleTask.taskName
        let taskDescriptionElement = document.createElement("p")
        taskDescriptionElement.className="task-description"
        taskDescriptionElement.innerHTML=singleTask.taskDescription
        let taskDaysElement = document.createElement("p")
        taskDaysElement.className="task-days"

        singleTask.days.map(day => {
          let taskDayElement = document.createElement("p")
          taskDayElement.className="task-day"
          taskDayElement.innerHTML=day
          taskDaysElement.appendChild(taskDayElement)
        })
        taskElement.appendChild(taskNameElement)
        taskElement.appendChild(taskDescriptionElement)
        taskElement.appendChild(taskDayElement)
        activityElement.appendChild(taskElement)
      })
      categoryElement.appendChild(activityElement)
    })
    root.appendChild(categoryElement)
  })
}

    
getTasks()