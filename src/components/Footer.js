import "./Footer.css";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={logo} />
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
