import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="pages">
          <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
