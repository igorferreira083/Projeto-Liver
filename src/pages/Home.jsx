import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">

        <div className="hero">

          <h1>
            Descubra novas músicas com o Liver
          </h1>

          <p>
            Sua plataforma moderna de gerenciamento musical.
          </p>

          <Link to="/register">
            <button>
              Começar agora
            </button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default Home;