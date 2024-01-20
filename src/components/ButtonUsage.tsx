import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  buttonText: string;
}


const ButtonUsage: React.FC<ButtonProps> = ({ buttonText }) => {

  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/home");
  }
  return <Button variant="contained" onClick={() => { handleOnclick() }}>{buttonText}</Button>;
}

export default ButtonUsage;