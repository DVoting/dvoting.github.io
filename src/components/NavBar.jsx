import React, { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { GlobalContext } from "../context/GlobalContext";

const NavBar = () => {
  const { user, setUser, isAuth, setIsAuth, setLoading } = useContext(GlobalContext);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    setLoading(false);
  }

  return (
    <header>
      <Navbar>
        <Container>
          <LinkContainer to={isAuth ? '/dashboard' : '/'}>
            <Navbar.Brand>DVoting</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ml-auto">
            {user ?
              <>
                <NavItem>
                  {user.name}
                  <LinkContainer to='#' onClick={logoutHandler}>
                    <Nav.Link>
                      <FiLogOut />{" "}
                      Logout
                    </Nav.Link>
                  </LinkContainer>
                </NavItem>
              </> :
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FiLogIn />{" "}
                  Log In
                </Nav.Link>
              </LinkContainer>
            }
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
};

export default NavBar;
