
import './App.css'
import { Reizo } from './components/Reizo'
import { Speedrival } from './components/Speedrival'
import { Zealth } from './components/Zealth'


function App() {

  return (
    <div className="flex justify-center space-x-10">
      <Zealth/>
      <Reizo/>
      <Speedrival/>
    </div>
  )
}

export default App
