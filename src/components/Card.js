import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCart, removeFromCart } from "../store/action";

export default function RecipeReviewCard({ product, carts, dispatch }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.title}
        subheader={
          "Rating: " +
          product.rating.rate +
          " from " +
          product.rating.count +
          " customers"
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!(product.id in carts) ? (
          <Button
            size="small"
            onClick={() => dispatch(addToCart({ id: product.id }))}
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            size="small"
            onClick={() => dispatch(removeFromCart({ id: product.id }))}
          >
            Remove from Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
