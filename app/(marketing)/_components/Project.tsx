"use client";

import Card from "./_ui/Card";



const Project = () => {

    const details = [
        {
            id:1,
            title:"Todo App",
            description:"A Todo App built using Next.js and MongoDB for secure authentication and efficient task management.",
            imageURL:"/images/todo-app.png",
            demo:"https://todo-app-mongo-db-venkatashivaprasads-projects.vercel.app/login",
            code:"https://github.com/VenkataShivaPrasad/todo_app_mongoDB"
        },
        {
            id:2,
            title:"Weather App",
            description:"A Simple Weather App built using Next.js, OpenWeather API, and Axios to fetch weather details based on the entered city.",
            imageURL:"/images/weather-app.png",
            demo:"https://weather-app-venkatashivaprasads-projects.vercel.app/",
            code:"https://github.com/VenkataShivaPrasad/weather-app"
        },
        {
            id:3,
            title:"Kanban Board",
            description:"A Simple implementation of a Kanban board using React, Vite, Tailwind CSS, and the DND Kit library.",
            imageURL:"/images/kanban-board.png",
            demo:"https://github.com/VenkataShivaPrasad/react-kanban-board",
            code:"https://github.com/VenkataShivaPrasad/react-kanban-board"
        },
    ]

  return (
    <div id="projects">
      <h1 className="
       text-4xl font-bold mt-[5rem] text-black relative
      "
      >
        Projects
      </h1>
        <div >
        <Card item={details}/>
        </div>
    </div>
  )
}



export default Project
