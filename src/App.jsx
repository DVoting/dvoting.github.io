import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Web3Provider } from "./context/Web3Context";
import { Home, Login } from "./pages";

const App = () => {
  const init = () => {
    localStorage.removeItem("error");
  };
  return (
    <Router>
      <Navbar />
      {init()}
      <main className="App py-3 bg-gray">
        <Web3Provider>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        </Web3Provider>
      </main>
    </Router>
  );
};

export default App;
