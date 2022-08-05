import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="pages">
          <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
