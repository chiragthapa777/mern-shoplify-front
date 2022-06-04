import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    orderId: "OR-M-1",
    state: "Delivered",
    total: 3000,
    orderDate: "21st may 2022",
    deliveryDate: "23st may 2022",
  },
  {
    orderId: "OR-M-82",
    state: "SHIPPING",
    total: 7000,
    orderDate: "21st may 2022",
    deliveryDate: "23st may 2022",
  },
  {
    orderId: "OR-M-41",
    state: "PROCESSING",
    total: 30.0,
    orderDate: "21st may 2022",
    deliveryDate: "23st may 2022",
  },
  {
    orderId: "OR-M-13",
    state: "Delivered",
    total: 5000,
    orderDate: "21st may 2022",
    deliveryDate: "23st may 2022",
  },
];

export default function OrderList() {
  return (
    <div>
      <div className="lg:w-[80vw] mx-auto my-2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">OrderId</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Order Date</TableCell>
                <TableCell align="right">Delivery Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.orderId}</TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">{row.orderDate}</TableCell>
                  <TableCell align="right">{row.deliveryDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
