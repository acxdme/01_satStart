import { useLocation } from "react-router-dom";
import ButtonUsage from "./ButtonUsage";

function Details() {

  const location = useLocation();

  return (
    <div>
      Satellite Name : {location?.state?.Name}
      <ButtonUsage buttonText={"Back"} />
    </div>
  )
}

export default Details;