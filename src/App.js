// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Apponintment',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 PM',
        reminder: false,
    }
  ])

const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask }/> : "To Tasks to Show."}
    </div>
  );
}

// Class Components
// class App extends React.Component {
//   render() {
//     return <h1> Hello from Class </h1>
//   }
// }

export default App;
