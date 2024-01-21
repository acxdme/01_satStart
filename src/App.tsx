import './App.css'
import ActionAreaCard from './components/Card';
import satelliteData from './service/SatelliteData';
import { ISatellite } from './types/ISatelliteData';

function App() {
  return (
    <>
      <h1 className='text-3xl font-serif font-semibold p-4'>Satellite Tracking System</h1>
      <div className='grid grid-cols-3 gap-4'>
        {satelliteData?.map((satellite: ISatellite) => {
          return (<ActionAreaCard key={satellite.id} name={satellite.name} satelliteData={satellite} />)
        })}
      </div>
    </>
  )
}

export default App;
