import { useState, useRef, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../assets/Logo.svg";

const links = [
  {
    id: 1,
    link: "About",
  },
  {
    id: 2,
    link: "Menu",
  },
  {
    id: 3,
    link: "Testimonials",
  },
  {
    id: 4,
    link: "Contact",
  },
];

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    if (nav) {
      return setNav(!nav);
    }
  };

  const navRef = useRef(null);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const navElement = navRef.current;

      if (!navElement) return;
      if (previousScrollPosition > currentScrollPosition) {
        navElement.style.transform = "translateY(0)";
        navElement.style.transition = "350ms";
      } else {
        navElement.style.transform = "translateY(-110px)";
        navElement.style.transition = "800ms";
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS
          to={link}
          smooth
          duration={550}
          onClick={handleClick}
          aria-label="On Click"
          className="nav-links"
        >
          {link}
        </LinkS>
      </li>
    );
  });

  return (
    <>
      <header ref={navRef}>
        <nav className="nav-container">
          <LinkS
            to="hero"
            smooth
            duration={550}
            onClick={handleClick}
            aria-label="On Click"
          >
            <img src={logo} alt="logo" className="logo" />
          </LinkS>

          <ul className="nav-links-container">{navLinks}</ul>

          <div onClick={() => setNav(!nav)} aria-label="On Click">
            <HiOutlineMenuAlt1
              size={30}
              style={{
                position: "fixed",
                top: "25",
                right: "10",
              }}
              className={`${nav ? "hamburger-off" : "hamburger-on"}`}
            />
          </div>
        </nav>
      </header>

      {nav && (
        <FaTimes
          size={30}
          style={{
            color: "#edefee",
            position: "fixed",
            top: "38",
            right: "10",
            zIndex: "99",
            cursor: "pointer",
          }}
          onClick={() => setNav(!nav)}
          aria-label="On Click"
        />
      )}
      <ul className={`${nav ? "nav-menu active" : "nav-menu"}`}>{navLinks}</ul>
    </>
  );
}

export default NavBar;
