import { useState } from "react"

function Signup() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ passwordConfirmation, setPasswordConfirmation ] = useState("")
  const [ userType, setUserType ] = useState("")

  const handleOnChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      switch(name) {
        case "signupEmailInput":
          setEmail(value);
          break;
        case "signupUserTypeInput":
          setUserType(value);
          break;
        case "signupPasswordInput":
          setPassword(value);
          break;
        case "signupPasswordConfInput":
          setPasswordConfirmation(value);
          break;
      }
  }

  const handleOnClick = () => {
      console.log('beep')
      /* TODO 
        - validate every input
        - send the information to the backend
        - redirect to main authenticated page
      */
  }

  return (
    <div className="d-flex h-100 bg-dark justify-content-center align-items-center">
      <div className="rounded shadow bg-light p-5">
        <h1 className="h3 mb-3 fw-normal text-center">Registre su cuenta</h1>
        <div className="mb-3">
          <label>Correo Electronico</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="nombre@correo.com" 
            name="signupEmailInput" 
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Tipo de Usuario</label>
          <select 
            className="form-select" 
            name="signupUserTypeInput"
            onChange={handleOnChange}
            value={userType}
          >
            <option value="employee">Empleador</option>
            <option value="developer">Desarrollador</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Contraseña" 
            name="signupPasswordInput"
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <div className="mb-4">
          <label>Confirmar Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Contraseña" 
            name="signupPasswordConfInput" 
            onChange={handleOnChange}
            value={passwordConfirmation}
          />
        </div>
        <button className="w-100 btn btn-md btn-outline-primary" onClick={handleOnClick}>Registrarme</button>
      </div>
    </div>
  )
}

export default Signup;