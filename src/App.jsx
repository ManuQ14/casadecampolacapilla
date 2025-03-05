import { BrowserRouter, useLocation } from "react-router-dom";
import { Routing } from "./routes/Routing";
import ScrollAnimation from "./views/main/ScrollAnimation";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();

  return (
    <>
      <Routing />
      <ScrollAnimation key={location.pathname} />
    </>
  );
}

export default App;
