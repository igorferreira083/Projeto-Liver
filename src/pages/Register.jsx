import { useState } from "react";
import { cadastrarComEmailSenha } from "../../firebase.js"; // Caminho saindo de src/pages/ para a raiz
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Usando o mesmo estilo que você já tem

function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  
  const navigate = useNavigate(); // Descomentei para você poder redirecionar após o cadastro

  const handleRegister = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    setErro("");
    setSucesso("");

    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const usuario = await cadastrarComEmailSenha(email, senha);
      if (usuario) {
        setSucesso("Conta criada com sucesso!");
        alert("Conta criada com sucesso! Redirecionando para o login...");
        
        // Redireciona automaticamente para a tela de login após 2 segundos
        setTimeout(() => {
          navigate("/login"); // Altere para a rota correta do seu login se for diferente
        }, 2000);
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

      {/* Envolvendo os inputs em um Form com onSubmit */}
      <form className="login-box" onSubmit={handleRegister}>
        <h1>Registro</h1>

        {/* Exibe mensagens de feedback */}
        {erro && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{erro}</p>}
        {sucesso && <p style={{ color: "green", fontSize: "14px", marginBottom: "10px" }}>{sucesso}</p>}

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

        {/* Botão configurado como submit para disparar o formulário */}
        <button type="submit" className="btn-criar-conta">Criar conta</button>

        <p>
          Já possui conta?{" "}
          <a href="/login">Fazer login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;