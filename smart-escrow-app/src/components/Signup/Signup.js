import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { mockSignup, signup } from '../../services/signupService';

function Signup() {
  const [ email, setEmail ] = useState('');
  const [ walletAddress, setWalletAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ userType, setUserType ] = useState('');

  const navigate = useNavigate();

  const handleOnChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      switch(name) {
        case 'signupEmailInput':
          setEmail(value);
          break;
        case 'signupUserTypeInput':
          setUserType(value);
          break;
        case 'signupPasswordInput':
          setPassword(value);
          break;
        case 'signupPasswordConfInput':
          setPasswordConfirmation(value);
          break;
        case 'signupWalletAddressInput':
          setWalletAddress(value);
          break;
      }
  }

  const handleOnClick = async () => {
      if (!email) {
        alert('Por favor introduzca una dirección de correo electrónico');
      }
      else if (!password) {
        alert('Por favor indique su contraseña');
      }
      else if (!passwordConfirmation) {
        alert('Por favor indique la confirmación de su contraseña');
      }
      else if (!walletAddress) {
        alert('Por favor introduzca una dirección de billetera electrónica válida');
      }
      else if (password !== passwordConfirmation) {
        alert('Su contraseña y confirmación deben ser iguales');
      }

      // BACKEND
      const responseStatus = await signup(email, userType, walletAddress, password);
      debugger;
      if (responseStatus === 200) {
        navigate('escrows-history')
      } else {
        alert('Algo ha salido mal, por favor intenta de nuevo');
      }
  }

  return (
    <div className='d-flex h-100 bg-dark justify-content-center align-items-center'>
      <div className='rounded shadow bg-light p-5' style={{ minWidth: '500px' }}>
        <h1 className='h3 mb-3 fw-normal text-center'>Registre su cuenta</h1>
        <div className='mb-3'>
          <label>Correo Electronico</label>
          <input 
            type='email' 
            className='form-control' 
            placeholder='nombre@correo.com' 
            name='signupEmailInput' 
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <div className='mb-3'>
          <label>Tipo de Usuario</label>
          <select 
            className='form-select' 
            name='signupUserTypeInput'
            onChange={handleOnChange}
            value={userType}
          >
            <option value='employee'>Empleador</option>
            <option value='developer'>Desarrollador</option>
          </select>
        </div>
        <div className='mb-3'>
          <label>Dirección de Billetera Electrónica</label>
          <input 
            type='text' 
            className='form-control' 
            placeholder='0x0' 
            name='signupWalletAddressInput' 
            onChange={handleOnChange}
            value={walletAddress}
          />
        </div>
        <div className='mb-3'>
          <label>Contraseña</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contraseña' 
            name='signupPasswordInput'
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <div className='mb-4'>
          <label>Confirmar Contraseña</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contraseña' 
            name='signupPasswordConfInput' 
            onChange={handleOnChange}
            value={passwordConfirmation}
          />
        </div>
        <button className='w-100 btn btn-md btn-outline-primary' onClick={handleOnClick}>Registrarme</button>
      </div>
    </div>
  )
}

export default Signup;