import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1 className="logo">Liver</h1>
        <p className="subtitle">Entre na sua conta</p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Digite seu email"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
          />

          <button type="submit">
            Entrar
          </button>

        </form>

        <p className="auth-switch">
          Não possui conta?
          <Link to="/register"> Criar conta</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;