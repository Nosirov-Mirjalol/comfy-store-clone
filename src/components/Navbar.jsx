import Navlinks from "./Navlinks";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <div className="btn btn-primary text-2xl">C</div>
        </div>
        <div className="navbar-center">
          <ul className="menu list-none menu-horizontal gap-3">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div></div>
          <div>
            <RiShoppingCartLine />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
