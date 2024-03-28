import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/6e/65/ce/6e65ce750cf3c36d9b437d5b438e472f.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">dead faeries</span>
        <span className="fpCity">Mumbai</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/c7/6c/1c/c76c1cb9f3e0461deaf04fd7b21973b9.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Austin</span>
        <span className="fpCity">Banglore</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/c3/bc/cb/c3bccbf3500ba890e1c2c10dab9f5893.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons</span>
        <span className="fpCity">Mumbai</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/236x/4a/54/3d/4a543ddc1897e807dfc9c1a356ef1f85.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Ilton</span>
        <span className="fpCity">Banglore</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;