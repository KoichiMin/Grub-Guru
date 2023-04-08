
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route  exact path="/" element={<HomePage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
