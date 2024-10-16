import { Header } from "./Components/Primary/Header";
import "./App.css";
import { Sesion } from "./Components/Primary/Sesion";

function App() {
  return (
    <>
      <main className=" mx-36 my-12 flex justify-center ">
        <Header></Header>
        <Sesion></Sesion>
      </main>
    </>
  );
}

export default App;
