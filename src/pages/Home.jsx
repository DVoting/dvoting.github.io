import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";

import Curve1 from "../assets/curve-1.png";
import Curve2 from "../assets/curve-2.png";
import Curve3 from "../assets/curve-3.png";

import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { isAuth, setIsAuth, loading, setLoading } = useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    setIsAuth("token" in localStorage);
    if (isAuth) {
      navigate("/dashboard", { replace: true });
    }
    setLoading(false);
  }, [isAuth]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={{ minHeight: "150vh", width: "100%" }}>
            <img
              src={Curve1}
              style={{
                position: "absolute",
                right: "0px",
                maxWidth: "60%",
                zIndex: "-1",
              }}
            />

            <Hero1 />
            <img
              src={Curve2}
              style={{
                position: "absolute",
                left: "0px",
                maxWidth: "20%",
                zIndex: "-1",
              }}
            />
            <Hero2 />

            <img
              src={Curve3}
              style={{
                position: "absolute",
                right: "0px",
                maxWidth: "18%",
                zIndex: "-1",
              }}
            />
            <Hero3 />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
