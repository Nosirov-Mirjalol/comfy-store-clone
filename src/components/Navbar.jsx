import Navlinks from "./Navlinks";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMoonOutline,IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-primary text-2xl">
            C
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu list-none menu-horizontal gap-3">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <IoMoonOutline className="swap-off h-6 w-6 fill-current" /> 

              {/* moon icon */}
              <IoSunnyOutline className="swap-on h-6 w-6 fill-current" />
            </label>
          </div>
          <Link className="btn btn-ghost btn-circle btn-md ml-4" to={"/cart"}>
            <div className="indicator">
              <RiShoppingCartLine className="w-5 h-5" />
              <span className="badge badge-xs badge-primary indicator-item">
                2
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
