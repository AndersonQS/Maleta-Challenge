import { useState } from 'react';
import * as C from './App.styles';
import DB from './obras';
import { Obra } from './types/Obra';
import { ListaObra } from './components/Listaobra/index';
import { AddObra } from './components/AddObra'


const App = () => {


  const [obras, setObras] = useState<Obra[]>(
    DB
  );

  function handleAddObra(id: number, obraNome: string, cidade: string, estado: string) {
    let newObra = [...obras];
    if (obraNome !== '' && cidade !== '' && estado !== '') {
      newObra.push({
        id,
        obraNome: obraNome,
        cidade: cidade,
        estado: estado,
      });
      setObras(newObra);
    } else alert("Valores não podem estar vazio")
  }
  function handleDelete(index: any) {
    let newObra = [...obras];
    newObra.splice(index, 1)

    setObras(newObra)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Obras</C.Header>

        <AddObra handleSubmit={handleAddObra} />

        <ListaObra obras={obras} handleDelete={handleDelete} />
      </C.Area>
    </C.Container>
  );
}

export default App;
