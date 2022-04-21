import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../Main/Main';
import { getEscrow } from '../../services/backendService';

function UniqueEscrowView() {
  const params = useParams();
  const [ escrow, setEscrow ] = useState({});
  
  useEffect(() => {
    const localEscrow = getEscrow(params.id, 'placeholder');
    setEscrow(localEscrow);
  }, [params.id])

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <h1>{escrow.name}</h1>
        <div className='mt-3'>
          <h2>Descripcion</h2>
          <p>{escrow.description}</p>
        </div>
        <div className='mt-3 d-flex'>
          <h3>Fecha de Expiracion</h3>
          <p>{escrow.expiration_date}</p>
        </div>
      </div>
    </Main>
  );
}

export default UniqueEscrowView;