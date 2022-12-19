import "../styles.css";
import { React, useEffect } from "react";
import AppBar from "./AppBar";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRequest } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []); // ComponentDidMount

  const store = useSelector((state) => state._store);
  return (
    <div className="App">
      <AppBar title="Products" />
      <Container sx={{ width: 1142, minWidth: 520, maxWidth: "100vw" }}>
        <h1>All Products</h1>
        <Grid container spacing={3}>
          {store.products?.map((product) => {
            return (
              <Grid item key={product.id}>
                <Card
                  product={product}
                  carts={store.carts}
                  dispatch={dispatch}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
