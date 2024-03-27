/* eslint-disable @typescript-eslint/no-unused-vars */
import { Moon, ShoppingCart, Sun } from "lucide-react";
import EmaJohn from "../../assets/ema-jogn-logo.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleThemes } from "../../redux/features/themeSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Header = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { products } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleThemes());
  };
  return (
    <header className="bg-[#1c2b35] text-white">
      <nav className="container flex items-center justify-between space-x-10 py-4 ">
        <Link to={"/"}>
          <img src={EmaJohn} alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/products"}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
            >
              {/* <img src={ring} width="24" height="24" alt="" /> */}
              <span className="rounded-xl bg-yellow-600 flex items-center justify-center absolute top-[-12px] left-[10px] size-5">
                {products.length}
              </span>
              <ShoppingCart size={24} />
            </Link>
          </li>

          <li>
            <button
              onClick={handleToggle}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              {darkMode ? <Sun /> : <Moon size={24} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
