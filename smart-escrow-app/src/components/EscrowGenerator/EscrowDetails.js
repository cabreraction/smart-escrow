import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Main from '../Main/Main'
import EscrowRoute from './EscrowRoute';

function EscrowDetails() {
  const { id: escrowId } = useParams();

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container mb-4'>
          <h1 className='mb-4'>Detalles del Fideicomiso</h1>
          <Tabs>
            <Tab eventKey={1} title={`Prueba 1`} key={1}>
              <EscrowRoute />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Main>
  );
}

export default EscrowDetails;