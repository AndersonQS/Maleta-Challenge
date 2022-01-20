import { useState, useEffect } from 'react';
import { Obra } from '../../types/Obra'
import * as C from './styles';
import obras from '../../obras';
//tabela
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  obras: Array<Obra>;
  
}
export const ListaObra = ({ obras, handleDelete }: any) => {
  useEffect(() => {
    console.log(obras)
  })

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      color: "#FFF"
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  return (
    <C.Container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome da Obra</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell>Estado</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {obras.map((row: any, index: any) => {
                return (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell scope="row">{row.obraNome}</StyledTableCell>
                    <StyledTableCell>{row.cidade}</StyledTableCell>
                    <StyledTableCell>{row.estado}</StyledTableCell>
                    <StyledTableCell onClick={() => handleDelete(index)}>  <DeleteIcon /> </StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>

          </Table>
        </TableContainer>
    </C.Container>
  );
}
