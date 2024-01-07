import './App.css'
import ButtonUsage from './components/ButtonUsage';
import ActionAreaCard from './components/Card';

function App() {


  return (
    <>
      <ButtonUsage/>  
      {[1,2,3].map((item)=>{
        return (<ActionAreaCard/>)
      })}

    </>
  )
}

export default App;
