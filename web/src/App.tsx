import "./App.css"
import { Habit } from "./components/Habit"

function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={7} />
    </div>
    ) 
}

export default App
