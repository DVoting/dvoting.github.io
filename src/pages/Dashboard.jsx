import React, { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavBar } from "../components";
import { Loader } from "../containers";

const Dashboard = () => {
  const { user, loading, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    if (user === null) setLoading(true);
    else setLoading(false);
  }, [user]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <div>
            User Dashboard
            {JSON.stringify(user)}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
