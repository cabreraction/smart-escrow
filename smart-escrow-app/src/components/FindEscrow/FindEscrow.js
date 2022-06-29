import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import Main from '../Main/Main';
import { getEscrowByCode, acceptEscrow } from '../../services/escrowService';
import { errorAlert } from '../../services/alertService';

function FindEscrow() {
  const [ escrowCode, setEscrowCode ] = useState('');
  const [ showModal, setShowModal ] = useState(false);
  const [ foundEscrow, setFoundEscrow ] = useState(null);
  const navigate = useNavigate();

  const findEscrow = async () => {
    // validate escrowCode

    const { status, escrow } = await getEscrowByCode(escrowCode);
    if (status === 200) {
      // show in a modal
      setFoundEscrow(escrow);
      setShowModal(true);
    } else {
      errorAlert('No se ha encontrado ningun fideicomiso con ese codigo');
    }
  }

  const triggerAcceptEscrow = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const { status } = await acceptEscrow(id, foundEscrow.id);

    if (status === 200) {
      navigate('../escrows-history');
    } else {
      errorAlert('Ha ocurrido un error, intenta de nuevo en un momento');
    }
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
          <Modal.Title>Fideicomiso Encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Precio (USD)</th>
                <th>Fecha de Expiraci&oacute;n</th>
              </tr>
            </thead>
            <tbody>
              {
                foundEscrow && 
                  <tr>
                    <td>{foundEscrow.id}</td>
                    <td>{foundEscrow.name}</td>
                    <td>{foundEscrow.price}</td>
                    <td>{foundEscrow.expirationDate}</td>
                  </tr>
              }
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-danger' onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button className='btn btn-outline-info' onClick={null}>
            Ver detalles
          </button>
          <button className='btn btn-outline-primary' onClick={triggerAcceptEscrow}>
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>
      <div className='d-flex h-100 justify-content-center align-items-center'>
        <div className='rounded shadow bg-light p-5' style={{ minWidth: '500px' }}>
          <h1 className='h3 mb-3 fw-normal text-center'>Buscar Fideicomiso</h1>
          <div className="row">
            <div className='col-sm-10'>
              <input 
                type='text' 
                className='form-control' 
                placeholder='Codigo del fideicomiso'
                onChange={evt => setEscrowCode(evt.target.value)}
                value={escrowCode}
              />
            </div>
            <div className='col-sm-2 d-flex align-items-end'>
              <button 
                className='btn btn-outline-primary'
                onClick={findEscrow}
              >
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main> 
  );
}

export default FindEscrow;