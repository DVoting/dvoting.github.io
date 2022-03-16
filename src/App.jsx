import { Alert, Container } from "react-bootstrap";
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
  ManageElection,
  OrganizationDetails,
  ElectionResults,
} from "./pages";
import { GlobalContext } from "./context/GlobalContext";
import { getNetworkName } from "./utils/networks";
import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";
import OrganizerRoute from "./utils/OrganizerRoute";
import Dummy from "./components/Dummy";
import { useContext } from "react";
import ExploreElections from "./pages/ExploreElections";
import ElectionVoting from "./pages/ElectionVoting";

const App = () => {
  const { chainId, setChainId } = useContext(GlobalContext);

  return (
    <Router>
      <main className='App py-3 bg-gray'>
        <Container>
          <NavBar />
        </Container>
        {chainId !== 0x13881 && (
          <p
            className='alert alert-warning text-center'
            style={{ padding: 0, marginTop: 0 }}
          >
            You are currently on{" "}
            <span className='fw-bold'>{getNetworkName(chainId)}</span>, please
            switch to <span className='fw-bold'>{getNetworkName(0x13881)}</span>
            . You can follow these{" "}
            <span>
              <a
                className='fw-bold'
                target='_blank'
                rel='noreferrer'
                href='https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/'
              >
                steps
              </a>
            </span>
          </p>
        )}
        <Container>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/explore' element={<ExploreElections />} />

            {/* All Private routes here */}
            <Route path='/' element={<PrivateRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route
                exact
                path='/dashboard/wallet'
                element={<GenerateWallet />}
              />

              <Route
                exact
                path='/elections/:id'
                element={<ElectionDetails />}
              />
              <Route
                exact
                path='/elections/:id/vote'
                element={<ElectionVoting />}
              />
              <Route
                exact
                path='/elections/:id/result'
                element={<ElectionResults />}
              />
              <Route
                exact
                path='/elections/:id/manage'
                element={<ManageElection />}
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
                <Route path='/org/:id' element={<OrganizationDetails />} />
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
