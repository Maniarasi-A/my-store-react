import * as React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantityInCart,
  decreaseQuantityInCart,
  removeFromCart
} from "../store/action";

export default function AlignItemsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state._store);
  let storeCarts = Object.keys(store.carts);
  return (
    <List
      sx={{
        width: "100%",
        minWidth: 400,
        color: "black",
        bgcolor: "background.paper"
      }}
    >
      {storeCarts.length ? (
        storeCarts.slice(0, 3).map((key) => {
          let product = store.products.find(
            (product) => product.id === Number(key)
          );
          let quantity = store.carts[product.id];
          let price = (quantity * product.price).toFixed(2);
          return (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={product.title} src={product.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Stack direction="row" justifyContent="space-between">
                          <span>{" Price: $" + product.price.toFixed(2)}</span>
                          <Stack direction="row" spacing={1}>
                            <RemoveCircleOutlineTwoToneIcon
                              sx={{ color: red[500] }}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(
                                  decreaseQuantityInCart({ id: product.id })
                                )
                              }
                            />
                            <span>{quantity}</span>
                            <AddCircleOutlineRoundedIcon
                              color="success"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(
                                  increaseQuantityInCart({ id: product.id })
                                )
                              }
                            />
                          </Stack>
                          <span>{" Total: $" + price}</span>
                        </Stack>
                      </Typography>
                    </React.Fragment>
                  }
                />
                <DeleteIcon
                  style={{ color: red[700], cursor: "pointer" }}
                  onClick={() => dispatch(removeFromCart({ id: product.id }))}
                />
              </ListItem>
              <Divider variant="fullwidth" component="li" />
            </div>
          );
        })
      ) : (
        <div>
          <Typography style={{ padding: 8 }}>Your cart is Empty!</Typography>
        </div>
      )}

      {storeCarts.length ? (
        <Stack
          style={{ margin: 8, marginBottom: 4 }}
          direction="row"
          justifyContent="center"
          onClick={() => navigate("/cart")}
        >
          <Button>Show all items ({storeCarts.length})</Button>
        </Stack>
      ) : (
        ""
      )}
    </List>
  );
}
