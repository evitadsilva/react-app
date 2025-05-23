import "./artist.css";
import Navbar from "../../components/navbar/Navbar";
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
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";  
import Reserve from "../../components/reserve/Reserve";

const Artist = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false); 

  const { data, loading } = useFetch(`/artists/find/${id}`)
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {dates} = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
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

  const handleClick = ()=> {
    if(user){
      setOpenModel(true);
    }
    else{
      navigate("/");
    }
  }

  return (
    <div>
    
      { loading ? ("loading...") : (
      <>
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
              <img src={data.photos[slideNumber]} 
              alt="" 
              className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="artistWrapper">
        <button className="bookNow">Book Now!</button>
        {openModel && <Reserve setOpen={setOpenModel} artistid={id}/>}
          <h1 className="artistTitle">{data.name}</h1>
          <div className="artistAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.city}</span>
          </div>
          <span className="artistPriceHighlight">
              Book a show over ₹{data.cheapestPrice} for a night
            </span>
          <div className="artistDetails">
            <div className="artistDetailsTexts">
              <h1 className="artistTitle">Music style: {data.genre}</h1>
              <p className="artistDesc">
              {data.desc}
              </p>
            </div>
            <div className="artistDetailsPrice">
              <h1>Grove and sing along with {data.name}</h1>
              <h2>
                <b>₹{days * data.cheapestPrice || data.cheapestPrice} </b> 
                ({days === 0 ? '1 show' : `${days} shows`}) 
              </h2>
              <button onClick={handleClick}>Book now!</button>
            </div>
          </div>
          <div className="artistImages">
            {data.photos?.map((photo, i) => (
              <div className="artistImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="artistImg"
                />
              </div>
            ))}
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      </>
       )}
       {openModel && <Reserve setOpen={setOpenModel} artistid={id}/>}
    </div>
  );
};

export default Artist;
