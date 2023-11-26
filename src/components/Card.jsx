import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import myImage from './src/assets/image/fajr-prayer(1).png';
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='./src/assets/image/fajr-prayer(1).png'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        صلاه 
          </Typography>
          <Typography variant="body1" color="text.secondary">
  الفجر
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}