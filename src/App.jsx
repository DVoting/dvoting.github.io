import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Election, Home, Login, SignUp } from "./pages";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <main className='App py-3 bg-gray'>
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            {/* All Private routes here */}
            <Route path='/' element={<PrivateRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/election' element={<Election />} />
            </Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
