import Dashboard from "./Components/Overview";
import NavBar from "./Components/NavBar";

const App = () => { 
  return (
    <section className="max-w-screen h-auto relative selection:bg-green-950">
      <NavBar />
      <Dashboard />
    </section>
  );
}
export default App;