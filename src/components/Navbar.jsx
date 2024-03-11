import  {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
  faHouse,
  faBars,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false)

    const togleNav = ()=>{
        setNavMenu(!navMenu)
    }
    
  return (
    <nav className="bg-white  w-full  pt-5 top-0 start-0 border-b border-gray-200   ">
      <div className="flex justify-between px-5 md:px-20">
  <div className="flex gap-5">
    <FontAwesomeIcon className="w-7 h-7 md:hidden" onClick={togleNav} icon={faBars} />
    <FontAwesomeIcon className="w-7 h-7 hidden md:block" icon={faHouse} />
  </div>
  <div className="text-2xl font-extrabold">LOGO</div>
  <div className="flex gap-5">
    <FontAwesomeIcon icon={faSearch} className="font-light" />
    <FontAwesomeIcon icon={faHeart} className="font-light" />
    <FontAwesomeIcon icon={faShoppingBag} className="font-light" />
    <FontAwesomeIcon className="hidden md:block md:font-light" icon={faUser} />
    <select
      name="language"
      className="md:h-5 text-sm font-semibold hidden md:block"
      id="language"
    >
      <option value="ENG">ENG</option>
      <option value="MAL">MAL</option>
      <option value="HIN">HIN</option>
      <option value="ARA">ARA</option>
    </select>
  </div>
</div>

      <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className={navMenu ?"md:flex sm:flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white":"md:flex sm:flex-col  hidden  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"}>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500"
                aria-current="page"
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                STORIES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
