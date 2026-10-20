import { BrowserRouter, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
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
      <Analytics />
    </>
  );
}

export default App;
