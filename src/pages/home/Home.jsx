import Featured from "../../components/featured/Featured.jsx";
import FeaturedArtists from "../../components/featuredArtists/FeaturedArtists.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import GenreList from "../../components/genreList/GenreList.jsx";
import "./home.css";

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by genre.</h1>
        <GenreList/>
        <h1 className="homeTitle">Crowd picks.</h1>
        <FeaturedArtists/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;