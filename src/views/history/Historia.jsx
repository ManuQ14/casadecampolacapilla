import { NavBar } from "../home/components/NavBar";

import { Header } from "./components/Header.jsx";
import { History } from "./components/History.jsx";
import { Pueblo } from "./components/Pueblo.jsx";
import { Notas } from "./components/Notas.jsx";

export const Historia = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <History />
      <Pueblo />
      <Notas />
    </div>
  );
};
