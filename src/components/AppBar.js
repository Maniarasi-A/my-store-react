import { React, useState } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import CartDropDown from "./CartDropDown";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar({ title }) {
  const navigate = useNavigate();
  const classes = useStyles();

  const cartCount = useSelector(
    (state) => Object.keys(state._store.carts).length
  );

  const [cartToggle, setCartToggle] = useState(); // ComponentDidUpdate

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            variant="h5"
            className={classes.title}
          >
            <Box display="flex" alignItems="center">
              <StorefrontIcon />
              <div>My Store</div>
            </Box>
          </Typography>
          <div style={{ position: "relative" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setCartToggle(!cartToggle)}
            >
              {cartCount ? (
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              ) : (
                <ShoppingCartIcon />
              )}
            </IconButton>
            {cartToggle && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  maxWidth: 450,
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "lightgrey 1px solid"
                }}
              >
                <CartDropDown />
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
