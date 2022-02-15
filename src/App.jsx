import { useEffect } from "react";
import { Container } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import {
  Dashboard,
  Home,
  Login,
  SignUp,
  ElectionDetails,
  CreateElection,
  ForgotPassword, NotFound
} from "./pages";

import PrivateRoute from "./utils/PrivateRoute";
import {ToastContainer} from "react-toastify";

const App = () => {
  return (
    <Router>
      <main className='App py-3 bg-gray'>
        <Container>
          {/*<NavBar/>*/}
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />

            {/* All Private routes here */}
            <Route path='/' element={<PrivateRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route
                exact
                path='/elections/:id'
                element={<ElectionDetails />}
              />
              <Route
                exact
                path='/create-election'
                element={<CreateElection />}
              />
            </Route>
          </Routes>
        </Container>
      </main>
      <ToastContainer/>
    </Router>
  );
};

export default App;
