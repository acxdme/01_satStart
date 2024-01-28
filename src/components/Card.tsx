import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard(props: any) {
    const navigate = useNavigate();
    const handleCardAction = (props: any) => {
        navigate("/details", { state: { Name: props.name , data : props.satelliteData } });
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { handleCardAction(props) }}>
                <CardMedia
                    component="img"
                    height="100"
                    image={props.satelliteData.image}
                    alt="Satellite"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}