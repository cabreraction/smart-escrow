import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import Main from '../Main/Main';
import { getEscrow } from '../../services/escrowService';

function UniqueEscrowView() {
  const params = useParams();
  const [ escrow, setEscrow ] = useState({});
  
  useEffect(() => {
    async function localFetch() {
      const response = await getEscrow(params.id);
      if (response.status === 200) {
        setEscrow(response.escrow);
      } else {
        // error
      }
    }

    localFetch();
  }, [params.id])

  return (
    <Main>
      <div className='d-flex flex-column mx-4'>
        <div>
          <h2 className='mb-3'>Detalles</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>C&oacute;digo</th>
                <th>Fecha de Expiraci&oacute;n</th>
                <th>Hora de Expiraci&oacute;n</th>
                <th>Precio (USD)</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{escrow.id}</td>
                <td>{escrow.name}</td>
                <td>{escrow.code}</td>
                <td>{escrow.expirationDate}</td>
                <td>{escrow.expirationTime}</td>
                <td>{escrow.price}</td>
                <td>{escrow.status}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h2 className='mb-3'>Rutas</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ruta</th>
                <th>Operaci&oacute;</th>
                <th>Tipo de Respuesta</th>
                <th>Atributos de la Respuesta</th>
              </tr>
            </thead>
            <tbody>
            {
                escrow.routes &&
                  escrow.routes.map(route => (
                    <tr key={`${route.endpointRoute}-${route.operation}`}>
                      <td>{route.endpointRoute}</td>
                      <td>{route.operation}</td>
                      <td>{route.responseType}</td>
                      <td>
                        <Table striped bordered>
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Tipo</th>
                              <th>Nulos Permitidos</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              route.attributes &&
                                route.attributes.map((att, index) => (
                                  <tr key={index}>
                                    <td>{att.name}</td>
                                    <td>{att.type}</td>
                                    <td>{att.allowsNull === 'notAllowed' ? 'No' : 'Si'}</td>
                                  </tr>
                                ))
                            }
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </Table>
        </div>
        <div>
          <h2 className='mb-3'>Instrucciones</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Descripci&oacute;n</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{escrow.description}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='mt-5 mb-4 d-flex justify-content-center'>
          <button className='btn btn-outline-primary mx-1'>Entregar Producto</button>
          <button className='btn btn-outline-danger mx-1'>Finalizar Sin Entrega</button>
        </div>
      </div>
    </Main>
  );
}

export default UniqueEscrowView;