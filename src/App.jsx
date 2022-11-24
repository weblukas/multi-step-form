import Step_1 from "./pages/Step_1"
import Step_1 from "./pages/Step_2"
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
    <Routes>
      <Step_1 />
      <Step_2 />
    </Routes>
     
    </div>
  )
}

export default App
