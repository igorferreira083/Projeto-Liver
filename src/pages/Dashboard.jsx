import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Seu Dashboard</h1>

        <p>
          Suas músicas aparecerão aqui.
        </p>

      </div>
    </>
  );
}

export default Dashboard;