import Navlinks from "./Navlinks";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="hidden lg:block lg:navbar-start">
          <Link to={"/"} className="btn btn-primary text-2xl">
            C
          </Link>
        </div>
        <div className="navbar-start lg:hidden">
          <details className="dropdown">
            <summary className="btn m-1"><RxHamburgerMenu className="w-5 h-5" /></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <Navlinks />
            </ul>
          </details>
        </div>
        <div className="hidden lg:navbar-center lg:block">
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
