import { useLocation } from "react-router-dom";
import ButtonUsage from "./ButtonUsage";
import "../styles/backButton.css";
import DataGrid from "./DataGrid";

function Details() {

  const location = useLocation();

  return (
    <>
      Satellite Name : {location?.state?.Name}
      <div className={"back-button"}>
        <ButtonUsage buttonText={"Back"} />
      </div>
      <div className={"data-grid"}>
        <DataGrid  satelliteData={location?.state?.data}/>
      </div>
    </>
  )
}

export default Details;