import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MyTable = ({ data, mutate }) => {
  const values = data?.data || { head: null, rows: null };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          {values.head.map((head) => (
            <TableCell align="center" key={head.key}>
              {head.name}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {values.rows.map((row, key) => (
            <TableRow key={key}>
              <TableCell align="center" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.ctime}</TableCell>
              <TableCell align="center">{row.sum}</TableCell>
              <TableCell align="center">{row.sum_ndc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
