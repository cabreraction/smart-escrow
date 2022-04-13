import { useState } from "react"

function Login() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name) {
      case "loginEmailInput":
        setEmail(value);
        break;
      case "loginPasswordInput":
        setPassword(value);
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
        <h1 className="h3 mb-3 fw-normal text-center">Inicie Sesi&oacute;n</h1>
        <div className="mb-3">
          <label >Correo Electr&oacute;nico</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="nombre@correo.com" 
            name="loginEmailInput"
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <div className="mb-4">
          <label>Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Contraseña" 
            name="loginPasswordInput"
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <button 
          className="w-100 btn btn-md btn-outline-primary"
          onClick={handleOnClick}
        >
          Iniciar Sesi&oacute;n
        </button>
      </div>
    </div>
  )
}

export default Login;