import "../styles/register.css"

function Register() {
  return (
    <div className="register-container">

      <a href="/" className="register-logo">
        Liver
      </a>

      <div className="register-box">

        <h1>Registro</h1>

        <input
          type="email"
          placeholder="Digite seu email"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
        />

        <button>
          Criar conta
        </button>

        <p>
          Já possui conta?{" "}

          <a href="/login">
            Fazer login
          </a>
        </p>

      </div>

    </div>
  )
}

export default Register