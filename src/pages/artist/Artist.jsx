import "./artist.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Artist = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
    {
      src: "https://i.pinimg.com/564x/d1/86/1d/d1861d9b430f2d4c50f62ad026c5a9d1.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="artistContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="artistWrapper">
          <button className="bookNow">Hire Now!</button>
          <h1 className="artistTitle">Olivier</h1>
          <div className="artistAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mumbai</span>
          </div>
          <div className="artistImages">
            {photos.map((photo, i) => (
              <div className="artistImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="artistImg"
                />
              </div>
            ))}
          </div>
          <div className="artistDetails">
            <div className="artistDetailsTexts">
              <h1 className="artistTitle">Stay in the heart of musically world.</h1>
              <p className="artistDesc">
              Born on planet Earth, I always love music: I remember when I was a 
              child sitting in front of my father's -the picture with a man in a plane- gigantic 
              Tannoy 15" dual concentric Gold Monitor and listening to music. My influence are Jean-Michel 
              Jarre, Mike Oldfield's Tubular Bell, Harmonium, Talk Talk, Genesis, Yes, Pink Floyd, Tears for 
              Fears, movies soundtrack, John Mclaughlin's Mahavisnu Orchestra, Eric Serra, Santana, Tito Puente,
              Cuban percussion, Latin jazz, house, dance music and others. During the '80s and '90s, 
              I saw my uncle's keyboard and synth set-up. A revelation!I knew I would fall in love with 
              electronic music! Hope you like my music!
              </p>
            </div>
            <div className="artistDetailsPrice">
              <h1>Perfect to be hired for your events</h1>
              <h2>
                <b>Rs999</b> (1 night)
              </h2>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Artist;