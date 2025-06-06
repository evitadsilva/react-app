import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  
  return (
    <div className="searchItem">
      <img 
      src={item.photos[0]} 
      alt="" className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.city}</span>
        <span className="siFeatures">{item.desc}</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">₹{item.cheapestPrice}</span>
          <Link to={`/artists/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;