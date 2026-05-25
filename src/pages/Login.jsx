import "../styles/login.css"

function Login() {
  return (
    <div className="login-container">

      <a href="/" className="login-logo">
        Liver
      </a>

      <div className="login-box">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Digite seu email"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
        />

        <button>
          Entrar
        </button>

        <p>
          Não possui conta?{" "}

          <a href="/register">
            Registrar
          </a>
        </p>

      </div>

    </div>
  )
}

export default Login