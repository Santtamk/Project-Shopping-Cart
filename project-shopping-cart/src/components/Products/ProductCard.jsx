import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard(props) {


  // const cart
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
          {props.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
          ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={() => props.addToCart(props)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

