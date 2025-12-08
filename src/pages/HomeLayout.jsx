import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components/index";

const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-xl mb-10"></span>
        </div>
      ) : (
        <div className="align-element">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default HomeLayout;
