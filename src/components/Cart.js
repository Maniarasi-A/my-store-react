import * as React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
import AppBar from "./AppBar";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantityInCart,
  decreaseQuantityInCart
} from "../store/action";

export default function BasicTable({ forDropdown = false }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state._store);
  let total = 0;
  let carts = Object.keys(store.carts);
  carts = forDropdown ? carts.slice(0, 3) : carts;
  return (
    <div>
      <AppBar />
      <br />
      <TableContainer component={Paper}>
        <Table
          sx={{ width: 1080, minWidth: 520, maxWidth: "100vw" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((key) => {
              let product = store.products.find(
                (product) => product.id === Number(key)
              );
              let quantity = store.carts[product.id];
              total += quantity * product.price;
              return (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          margin: -4
                        }}
                        alt={product.title}
                        src={product.image}
                      />
                      <span>{product.title}</span>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1}>
                      <RemoveCircleOutlineTwoToneIcon
                        sx={{ color: red[500] }}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(decreaseQuantityInCart({ id: product.id }))
                        }
                      />
                      <span>{quantity}</span>
                      <AddCircleOutlineRoundedIcon
                        color="success"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(increaseQuantityInCart({ id: product.id }))
                        }
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    $ {product.price.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    $ {(product.price * quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        style={{ margin: 8, marginTop: 24 }}
        direction="row"
        justifyContent="end"
      >
        <span>Total: ${total.toFixed(2)}</span>
      </Stack>
    </div>
  );
}
