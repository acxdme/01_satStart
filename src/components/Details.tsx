import { useLocation } from "react-router-dom";
import ButtonUsage from "./ButtonUsage";
import "../styles/backButton.css";
import DataTable from "./DataGrid";

function Details() {

  const location = useLocation();

  return (
    <>
      Satellite Name : {location?.state?.Name}
      <div className={"back-button"}>
        <ButtonUsage buttonText={"Back"} />
      </div>
      <div className={"data-grid"}>
        <DataTable />
      </div>
    </>
  )
}

export default Details;