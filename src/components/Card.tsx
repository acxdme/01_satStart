import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const handleCardAction = (name: string) => {
    console.log(`${name} satellite clicked!`)
}

export default function ActionAreaCard(props: any) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { handleCardAction(props.name) }}>
                <CardMedia
                    component="img"
                    height="100"
                    image="https://th.bing.com/th/id/OIP.iY8_k7Im5JfkLqqzjaszFwHaEs?w=307&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    alt="Satellite"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.purpose}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}