import { useEffect, useState } from 'react';

import Main from '../Main/Main';
import { getUser } from '../../services/userService';
import { updatePassword } from '../../services/userService';

function Profile() {
  const [ user, setUser ] = useState();
  const [ oldPassword, setOldPassword ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ newPasswordConfirmation, setNewPasswordConfirmation ] = useState('');
  const { id } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const localFetch = async () => {
      const userData = await getUser(id);
      setUser(userData.user);
    };

    localFetch();
  }, [id])

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    switch(name) {
      case 'oldPasswordInput':
        setOldPassword(value);
        break;
      case 'newPasswordInput':
        setNewPassword(value);
        break;
      default:
        setNewPasswordConfirmation(value);
        break;
    }
  }

  return (
    <Main>
      <div className='d-flex h-100 justify-content-center'>
        <div className='rounded shadow bg-light p-5' style={{ minWidth: '500px' }}>
          <h2 className='mb-3 text-center'>Perfil</h2>
          <div className='mb-3'>
            <label className='mb-1'>Correo Electronico</label>
            <input 
              type='email' 
              className='form-control' 
              name='emailInput' 
              onChange={null}
              value={user.email}
              readOnly={true}
            />
          </div>
          <div className='mb-5'>
            <label className='mb-1'>Wallet Address</label>
            <input 
              type='text' 
              className='form-control' 
              name='walletInput' 
              onChange={null}
              value={user.walletAddress}
              readOnly={true}
            />
          </div>
          <h2 className='mb-3 text-center'>Modificar Contraseña</h2>
          <div className='mb-3'>
            <label className='mb-1'>Contraseña Actual</label>
            <input 
              type='password' 
              className='form-control' 
              name='oldPasswordInput' 
              onChange={handleChange}
              value={oldPassword}
            />
          </div>
          <div className='mb-3'>
            <label className='mb-1'>Nueva Contraseña</label>
            <input 
              type='password' 
              className='form-control' 
              name='newPasswordInput' 
              onChange={handleChange}
              value={newPassword}
            />
          </div>
          <div className='mb-3'>
            <label className='mb-1'>Confirmar Nueva Contraseña</label>
            <input 
              type='email' 
              className='form-control' 
              name='newPasswordConfirmationInput' 
              onChange={handleChange}
              value={newPasswordConfirmation}
            />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-outline-primary'>Cambiar Contraseña</button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Profile;