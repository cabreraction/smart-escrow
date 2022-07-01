import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import Main from '../Main/Main';
import { getEscrow } from '../../services/escrowService';
import ProcessInfo from '../ProcessInfo/ProcessInfo'
import { escrowProductDeliveryGuide } from '../../content/content';

function UniqueEscrowView() {
  const params = useParams();
  const [ escrow, setEscrow ] = useState({});
  const [ showModal, setShowModal ] = useState(false);
  const inputRef = useRef(null);
  const [ selectedFile, setSelectedFile ] = useState(null);
  
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

  const handleFileChange = evt => {
    setSelectedFile(evt.target.files[0]);
    console.log(evt.target.files[0]);
    setShowModal(true);
  }

  const submitProductDelivery = () => {

  }

  const cancelProductDelivery = () => {
    setSelectedFile(null);
    setShowModal(false);
  }

  return (
    <Main>
      <Modal 
        show={showModal} 
        onHide={null} 
        backdrop="static"
        keyboard={false} 
      >
        <Modal.Header >
          <Modal.Title>Entregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Esta a punto de entregar la aplicacion acordada en el siguiente archivo comprimido: {selectedFile && selectedFile.name}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-danger' onClick={cancelProductDelivery}>
            Cancelar
          </button>
          <button className='btn btn-outline-primary' onClick={submitProductDelivery}>
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>
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
        <ProcessInfo 
            { ...escrowProductDeliveryGuide } 
          />
        <div className='mb-4 d-flex justify-content-center'>
          <input hidden={true} type="file" ref={inputRef} onChange={handleFileChange} accept='.zip'/>
          <button 
            className='btn btn-outline-primary mx-1'
            onClick={() => inputRef.current.click()}
          >
            Entregar Producto
          </button>
          <button className='btn btn-outline-danger mx-1'>Finalizar Sin Entrega</button>
        </div>
      </div>
    </Main>
  );
}

export default UniqueEscrowView;