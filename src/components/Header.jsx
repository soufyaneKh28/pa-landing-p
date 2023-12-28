import { navLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Header = () => (
  <header className="" dir="LTR">
    <div className="container">
      <nav className={` flex items-center mt-5 mb-5 justify-between px-5`}>
        <div className=" sm:w-[200px] w-[150px] ">
          <img src={logo} alt="logo" />
        </div>
        <ul className=" items-center sm:flex hidden">
          {navLinks.map((navlink) => (
            <li className=" md:mr-10 mr-5" key={navlink.id}>
              <a href={`"${navlink.id}`} className=" nav-link">
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          {socialMedia.map((icon, index) => (
            <div
              className={`header-icon ${
                index !== socialMedia.length - 1 ? "mr-2" : " mr-0"
              } hover:scale-125 transition`}
              key={icon.id}
            >
              <a href={icon.link}>
                <img src={icon.icon} alt="instagram" />
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
