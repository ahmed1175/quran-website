import Hero from "../Component/Hero/Hero";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/footer/footer";
import Main from "../Component/main/main";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
