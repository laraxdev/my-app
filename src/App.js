import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Basic from "./components/BookingForm";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Highlight />
      <Testimonial />
      <About />
      <Booking />
      <Basic />
      <Footer />
    </>
  );
}

export default App;
