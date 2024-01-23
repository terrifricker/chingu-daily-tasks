
const root = document.querySelector("#root")


const getTasks = () => {
  fetch('./assets/tasks-example.json')
    .then(response => response.json())
    .then(data => displayTasks(data))
}

const displayTasks = (data) => {
  console.log("data ", data)
  data.map((category) => {
    console.log("category ", category)
    console.log("activityTypes ", category.activityTypes)

    let categoryElement = document.createElement("div")
    categoryElement.className="category"
    let categoryHeadingElement = document.createElement("h2")
    categoryHeadingElement.className="category-heading"
    categoryHeadingElement.innerHTML = category.categoryName
    categoryElement.appendChild(categoryHeadingElement)

    category.activityTypes.map(activityName => {
      
      console.log("activityName ", activityName)
      console.log("taskList ", activityName.Tasks)

      let activityElement = document.createElement("div")
      activityElement.className="activity"
      let activityHeadingElement = document.createElement("h3")
      activityHeadingElement.className="activity-heading"
      activityHeadingElement.innerHTML = activityName.activityName
      activityElement.appendChild(activityHeadingElement)

      activityName.Tasks.map(singleTask => {

        console.log(singleTask)
        console.log(singleTask.days)

        let taskElement = document.createElement("div")
        taskElement.className="task"

        let name = document.createElement("p")
        name.className="task-name"
        name.innerHTML=singleTask.taskName

        let description = document.createElement("p")
        description.className="task-description"
        description.innerHTML=singleTask.taskDescription

        let day = document.createElement("p")
        day.className="task-day"
        day.innerHTML = singleTask.days[0]

        taskElement.appendChild(name)
        taskElement.appendChild(description)
        taskElement.appendChild(day)

        activityElement.appendChild(taskElement)
        console.log(activityElement)
      })

      categoryElement.appendChild(activityElement)
      console.log(categoryElement)
    })
    root.appendChild(categoryElement)
  })
}

    
getTasks()