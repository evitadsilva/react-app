import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.pinimg.com/236x/e3/fb/3d/e3fb3d1cd2f6804a54f73623eb9190f2.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Orlando</h1>
        <span className="siDistance">500m from center</span>
        <span className="siSubtitle">
        Multi-talented artist hailing from Lafayette, Louisiana, 
        and currently residing in the vibrant city of New York, is a force to be reckoned with in the music industry.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs799</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;