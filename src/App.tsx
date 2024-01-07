import './App.css'
import ActionAreaCard from './components/Card';
import satelliteData from './service/SatelliteData';
import { ISatellite } from './types/ISatelliteData';
function App() {


  return (
    <>
      <h1>Satellite Tracking System</h1>
      {satelliteData?.map((satellite: ISatellite) => {
        return (<ActionAreaCard name={satellite.name} purpose={satellite.purpose} />)
      })}
    </>
  )
}

export default App;
