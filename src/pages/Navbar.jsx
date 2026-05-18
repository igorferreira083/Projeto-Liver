import { Link } from "react-router-dom";
// Aparentemente tem um erro no cache, sempre fala q a Navbar está errada mesmo com o codigo corrigido.
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;