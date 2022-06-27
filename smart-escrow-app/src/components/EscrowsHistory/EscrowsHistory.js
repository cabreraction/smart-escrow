import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

import Main from '../Main/Main';
import { getOwnerEscrows } from '../../services/escrowService';

function EscrowsHistory() {
  const [ escrows, setEscrows ] = useState([]);

  useEffect(() => {
    async function localFetch() {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user.id;
      let received = [];
      if (user.type === 'employer') {
        received = (await getOwnerEscrows(userId)).escrows;
      } else {

      }
      setEscrows(received);
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
                <th>Precio (USD)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                escrows.length > 0 && escrows.map(escrow => (
                  <tr key={escrow.id}>
                    <td>{escrow.code}</td>
                    <td>{escrow.name}</td>
                    <td>{escrow.status}</td>
                    <td>{escrow.expirationDate}</td>
                    <td>{escrow.price}</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle as={ThreeDotsVertical} />
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
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