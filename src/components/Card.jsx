import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import myImage from './src/assets/image/fajr-prayer(1).png';
export default function ActionAreaCard(props) {
  let imagePass = props.image
  let time = props.time
  let name = props.name
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={imagePass}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        {name} 
          </Typography>
          <Typography variant="h2" color="text.secondary">
  {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}