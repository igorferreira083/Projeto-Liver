import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Projeto Liver</h2>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/dashboard">🎵 Minhas Músicas</Link>
          </li>
          <li>
            <Link to="/">🏠 Início</Link>
          </li>
          <li>
            <Link to="/profile">👤 Meu Perfil</Link> 
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <Link to="/login" className="logout-btn">🚪 Sair</Link>
      </div>
    </div>
  );
}

export default Sidebar;