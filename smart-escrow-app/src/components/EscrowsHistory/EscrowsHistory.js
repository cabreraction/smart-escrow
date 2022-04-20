import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import Main from '../Main/Main';
import { getEscrows } from '../../services/backendService';

function EscrowsHistory() {
  const [ activeEscrows, setActiveEscrows ] = useState([]);
  const [ expiredEscrows, setExpiredEscrows ] = useState([]);
  const [ completedEscrows, setCompletedEscrows ] = useState([]);

  useEffect(() => {
    const rawEscrows = getEscrows();
    const localActive = rawEscrows.filter(escrow => escrow.state === 'active');
    setActiveEscrows(localActive);
    const localExpired = rawEscrows.filter(escrow => escrow.state === 'expired');
    setExpiredEscrows(localExpired);
    const localCompleted = rawEscrows.filter(escrow => escrow.state === 'completed');
    setCompletedEscrows(localCompleted);
  }, []);

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div>
          <h2>Fideicomisos Activos</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Fecha de Expiraci&oacute;n</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {
                activeEscrows.map(active => (
                  <tr>
                    <td>{active.id}</td>
                    <td>{active.name}</td>
                    <td>{active.expiration_date}</td>
                    <td>{active.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <div>
          <h2>Fideicomisos Expirados</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Fecha de Expiraci&oacute;n</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {
                expiredEscrows.map(expired => (
                  <tr>
                    <td>{expired.id}</td>
                    <td>{expired.name}</td>
                    <td>{expired.expiration_date}</td>
                    <td>{expired.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <div>
          <h2>Fideicomisos Completados</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Fecha de Expiraci&oacute;n</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {
                completedEscrows.map(completed => (
                  <tr>
                    <td>{completed.id}</td>
                    <td>{completed.name}</td>
                    <td>{completed.expiration_date}</td>
                    <td>{completed.price}</td>
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