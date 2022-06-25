import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import Main from '../Main/Main';
import { getOwnerEscrows } from '../../services/escrowService';

function EscrowsHistory() {
  const [ escrows, setEscrows ] = useState([]);

  useEffect(() => {
    async function localFetch() {
      // get user Id
      const tempId = localStorage.getItem('user');
      const userId = tempId;
      const temp = getOwnerEscrows(userId);
      setEscrows(temp);
    }
    localFetch();
  }, []);

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div>
          <h2 className='mb-3'>Fideicomisos</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>codigo</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Fecha de Expiraci&oacute;n</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                escrows.length > 0 && escrows.map(escrow => (
                  <tr>
                    <td>{escrow.code}</td>
                    <td>{escrow.name}</td>
                    <td>{escrow.status}</td>
                    <td>{escrow.expirationDate}</td>
                    <td>{escrow.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    </Main>
  );
}

export default EscrowsHistory;