import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { signup } from '../../services/signupService';
import { errorAlert } from '../../services/alertService';
import { validateTextInput, validatePasswordAndConfirmationMatch } from '../../utils/utils';

function Signup() {
  const [ email, setEmail ] = useState('');
  const [ walletAddress, setWalletAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ userType, setUserType ] = useState('employer');

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
    const inputFields = [ 
      { value: email, type: 'email' },
      { value: password, type: 'password' },
      { value: passwordConfirmation, type: 'passwordConfirmation' },
      { value: walletAddress, type: 'walletAddress' }
    ];
    
    for (let field of inputFields) {
      const { status, errorMessage } = validateTextInput(field.value, field.type);
      if (status !== 'ok') {
        errorAlert(errorMessage);
        return;
      }
    }
    
    const { status, errorMessage } = validatePasswordAndConfirmationMatch(password, passwordConfirmation);
    if (status !== 'ok') {
      errorAlert(errorMessage);
      return;
    }

    const response = await signup(email, userType, walletAddress, password);
    debugger
    if (response.status === 200) {
      const user = { id: response.id, type: response.type };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('../escrows-history')
    } else {
      errorAlert('Algo ha salido mal, por favor intenta de nuevo');
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
            <option value='employer'>Empleador</option>
            <option value='developer'>Desarrollador</option>
          </select>
        </div>
        <div className='mb-3'>
          <label>Direcci??n de Billetera Electr??nica</label>
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
          <label>Contrase??a</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contrase??a' 
            name='signupPasswordInput'
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <div className='mb-4'>
          <label>Confirmar Contrase??a</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contrase??a' 
            name='signupPasswordConfInput' 
            onChange={handleOnChange}
            value={passwordConfirmation}
          />
        </div>
        <button className='w-100 btn btn-md btn-outline-primary' onClick={handleOnClick}>Registrarme</button>
        <div className='d-flex justify-content-center mt-2'>
          <small>
            <Link className="nav-link" to="/">??Ya tienes cuenta? Inicia Sesi&oacute;n</Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Signup;