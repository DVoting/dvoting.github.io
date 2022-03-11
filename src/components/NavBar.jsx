import React, { useContext, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavItem, NavDropdown } from "react-bootstrap";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { VscSignIn } from "react-icons/vsc";
import { BiWalletAlt } from "react-icons/bi";
import { GlobalContext } from "../context/GlobalContext";
import { initWallet, connectWallet, disconnectWallet } from "../utils/wallet";

const NavBar = () => {
  const { user, setUser, isAuth, setIsAuth, setLoading } = useContext(GlobalContext);
  const { walletId, setWalletId } = useContext(GlobalContext);
  const { chainId, setChainId } = useContext(GlobalContext)

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    setLoading(false);
  };

  useEffect(async () => {
    await initWallet(setWalletId, setChainId)
  }, []);

  return (
    <header>
      <Navbar>
        <Container>
          <LinkContainer to={isAuth ? "/dashboard" : "/"}>
            <Navbar.Brand>
              <h2>DVoting</h2>
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/explore' style={{ marginRight: "auto" }}>
            <Nav.Link>
              Explore
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Nav className='ml-auto'>
            {user ? (
              <>
                <NavItem>
                  {user.name}
                  <LinkContainer to='#' onClick={logoutHandler}>
                    <Nav.Link>
                      <FiLogOut /> Logout
                    </Nav.Link>
                  </LinkContainer>
                </NavItem>
              </>
            ) : (
              <>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FiLogIn /> Log In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <Nav.Link>
                    <VscSignIn /> SignUp
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
            {walletId === "" ? (
              <Nav.Link onClick={() => connectWallet(setWalletId)}>
                <BiWalletAlt size={20} /> Connect Wallet
              </Nav.Link>
            ) : (
              <NavDropdown
                title={walletId.slice(0, 4) + "..." + walletId.slice(-4)}
              >
                <NavDropdown.Item onClick={() => disconnectWallet(setWalletId)}>
                  Disconnect
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
