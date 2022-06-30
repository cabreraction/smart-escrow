import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

import Main from '../Main/Main';
import { getOwnerEscrows, getDeveloperEscrows } from '../../services/escrowService';

function EscrowsHistory() {
  const [ escrows, setEscrows ] = useState([]);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [])

  useEffect(() => {
    async function localFetch() {
      if (!user) return;
      const userId = user.id;
      let received = [];
      if (user.type === 'employer') {
        received = (await getOwnerEscrows(userId)).escrows;
      } else {
        received = (await getDeveloperEscrows(userId)).escrows;
      }
      setEscrows(received);
    }
    localFetch();
  }, [user]);

  return (
    <Main>
      <div className='d-flex flex-column mx-4'>
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
                          <Dropdown.Item href={`/escrow/${escrow.id}`}>
                            Ver Detalles
                          </Dropdown.Item>
                          {
                            user.type === 'employer' && <Dropdown.Item href="#">Editar</Dropdown.Item>
                          }
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