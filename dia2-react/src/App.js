import './App.css';

import Counter from "./components/Counter/Counter.jsx"
import Greeting from './components/Greeting/Greeting';




function App() {
  return (
    <div className="App">
      <Counter valor={12}/>
      <Greeting name= "Euralio"/>
      <Greeting name= "Luffy"/>
      
    </div>
  );
}



export default App;
