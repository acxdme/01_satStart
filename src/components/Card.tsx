import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.iY8_k7Im5JfkLqqzjaszFwHaEs?w=307&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7"
          alt="Satellite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Satellite-Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Satellite-Functionality
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}