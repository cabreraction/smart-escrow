import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Main from '../../Main/Main'
import EscrowRoute from './EscrowRoute';
import ProcessInfo from '../../ProcessInfo/ProcessInfo'
import { escrowDetailsGenerationGuide } from '../../../content/content';

function EscrowDetails() {
  const { id: escrowId } = useParams();
  const [ endpointTabs, setEndpointTabs ] = useState([{}]);

  const addNewEndpoint = () => {
    setEndpointTabs(prev => { 
      const newTabs = [ ...prev ];
      newTabs.push({});
      return newTabs; 
    })
  }

  const createTabs = () => {
    return (
      <Tabs>
        {
          endpointTabs.map((endpoint, index) => (
            <Tab eventKey={index + 1} title={`${endpoint.name || `Endpoint ${index + 1}`}`} key={index + 1}>
              <EscrowRoute />
            </Tab>
          ))
        }
      </Tabs>
    )
  }

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container mb-4'>
          <h1 className='mb-4'>Detalles del Fideicomiso</h1>
          <ProcessInfo 
            { ...escrowDetailsGenerationGuide } 
          />
          <div className='d-flex justify-content-end'>
            <button 
              className="btn btn-outline-secondary mx-3" 
              onClick={addNewEndpoint}
            >
              Agregar Endpoint +
            </button>
          </div>
          {createTabs()}
          <div className='d-flex align-items-center justify-content-center'>
            <button 
              className='btn btn-outline-danger mx-2'
              onClick={null}
            >
              Cancelar
            </button>
            <button 
              className='btn btn-outline-primary mx-2'
              onClick={null}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default EscrowDetails;