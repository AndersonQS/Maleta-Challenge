import { useState,  } from 'react';
import { Obra } from '../../types/Obra';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

import { Container } from './styles';

let id = 3;
export const AddObra = ({ handleSubmit }: any) => {

  
  const [obraNome, setObraNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  return (
    <Container>
      <input
        type="text"
        placeholder="Nome Obra"
        value={obraNome}

        onChange={e =>
          setObraNome(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={e => setCidade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={e => setEstado(e.target.value)}
      />
      <Button variant="contained"  endIcon={<SendIcon />} onClick={() => { id++; handleSubmit(id  ,obraNome, cidade, estado)}} type="submit">Adicionar Obra</Button>
    </Container>
  );
}



