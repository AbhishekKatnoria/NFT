import { Link, useLocation } from "react-router-dom";
import { Nav } from "../../json";
import Button from "../Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState<String>("");
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <nav className="pt-5 flex justify-between items-center">
      {Nav?.logo?.href && Nav?.logo?.label && (
        <div className="inline-block">
          <Link to={Nav?.logo?.href}>
            <img src={Nav?.logo?.label} alt="Logo" />
          </Link>
        </div>
      )}
      {Nav?.links.length > 0 && (
        <div className="flex font-poppins">
          <ul className="flex gap-7">
            {Nav?.links?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={() => {
                    handleClick(index);
                  }}
                  className={`${
                    url === item.href && active === index
                      ? "border-b-2 border-blue-800"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {Nav?.checkout?.img && Nav?.button?.label && (
        <div className="flex gap-3">
          <Button variant="filled" css="rounded-[42px]">
            {" "}
            <img src={Nav?.button?.img} alt="Checkout" />
            {Nav?.button?.label}
          </Button>
          <div className="p-[9px] gradient-border-varient-sec cursor-pointer overflow-hidden">
            <img src={Nav?.checkout?.img} alt="Checkout" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
