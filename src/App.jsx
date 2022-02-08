import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Web3Provider } from "./context/Web3Context";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Web3Provider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Web3Provider>
    </div>
  );
}

export default App;
