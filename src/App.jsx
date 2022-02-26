import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import {
  Dashboard,
  GenerateWallet,
  Home,
  Login,
  SignUp,
  ElectionDetails,
  CreateElection,
  ForgotPassword,
  NotFound,
  VerifyEmail,
  ChangePassword,
  ManageOrganizations,
} from "./pages";

import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";
import OrganizerRoute from "./utils/OrganizerRoute";
import Dummy from "./components/Dummy";

const App = () => {
  return (
    <Router>
      <main className='App py-3 bg-gray'>
        <Container>
          <NavBar />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />

            {/* All Private routes here */}
            <Route path='/' element={<PrivateRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/dashboard/wallet' element={<GenerateWallet />} />
              <Route
                exact
                path='/elections/:id'
                element={<ElectionDetails />}
              />
              <Route exact path='/verifyEmail' element={<VerifyEmail />} />
              <Route
                exact
                path='/changePassword'
                element={<ChangePassword />}
              />

              {/* All Organizer routes here */}
              <Route path='/org' element={<OrganizerRoute />}>
                <Route path='/org' element={<ManageOrganizations />} />
                <Route path='/org/:id' element={<Dummy />} />
                <Route
                  path='/org/:id/create-election'
                  element={<CreateElection />}
                />
              </Route>
            </Route>
          </Routes>
        </Container>
      </main>
      <ToastContainer style={{ width: "30em" }} />
    </Router>
  );
};

export default App;
