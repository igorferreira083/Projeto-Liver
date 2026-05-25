import { useState } from "react";
import { loginComEmailSenha } from "../../firebase.js";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    setErro(""); // Limpa erros antigos

    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

  try {
  const usuario = await loginComEmailSenha(email, senha);
  if (usuario) {
   
    navigate("/dashboard");

  }
} catch (err) {
  setErro(err.message);
}
  };

  return (
    <div className="login-container">
      <a href="/" className="login-logo">
        Liver
      </a>

      <form className="login-box" onSubmit={handleLogin}>
        <h1>Login</h1>

        {/* Exibe mensagem de erro caso aconteça algo */}
        {erro && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{erro}</p>}

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* Mudei para tipo submit para funcionar com o onSubmit do form */}
        <button type="submit">Entrar</button>

        <p>
          Não possui conta?{" "}
          <a href="/register">Registrar</a>
        </p>
      </form>
    </div>
  );
}

export default Login;