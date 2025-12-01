import { NavLink } from "react-router-dom";

const Navlinks = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Products",
      url: "/products",
    },
    {
      id: 4,
      title: "Cart",
      url: "/cart",
    },
    {
      id: 5,
      title: "Checkout",
      url: "/checkout",
    },
    {
      id: 6,
      title: "Orders",
      url: "/orders",
    },
  ];
  return links.map((item) => {
    const { id, title, url } = item;
    return (
      <li key={id}>
        <NavLink to={url} className={"capitalize"}>
          {title}
        </NavLink>
      </li>
    );
  });
};

export default Navlinks;
