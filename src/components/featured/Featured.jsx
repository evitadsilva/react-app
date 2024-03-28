import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://imgs.search.brave.com/jgYhJ80ZckTTuB17yFb5gTGBy0lQ9uRwiYBC2Y2AI5A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk4/OTY2Nzc4L3Bob3Rv/L211bWJhaS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QzZo/dTM4eG5JUC1GTmRa/cWRVOTJHOEx6YUJD/SXRtOTAzT05XaFBT/WjNibz0"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>470 artists</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://imgs.search.brave.com/ur3V3AgxEXgyLZ-eMk1DZHPHJ6o3ajxsuJOxxXRb2yU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTU0NTU5MjEyLHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Banglore</h1>
          <h2>133 artists</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://imgs.search.brave.com/IynpOGDWduioGj2biu3Hc125HIsS0mxEACDJsWL7tss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzEyLzIzLzcy/LzM2MF9GXzIxMjIz/NzI3M19yN1Z1Ulph/cWgxTEJ3Y2JpMVRq/WVVzajU3U2xjUXFq/Ny5qcGc"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hydrabad</h1>
          <h2>132 artists</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;