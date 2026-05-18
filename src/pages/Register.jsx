import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1 className="logo">Liver</h1>
        <p className="subtitle">Crie sua conta</p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Digite seu email"
          />

          <input
            type="password"
            placeholder="Crie uma senha"
          />

          <button type="submit">
            Cadastrar
          </button>

        </form>

        <p className="auth-switch">
          Já possui conta?
          <Link to="/login"> Fazer login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;