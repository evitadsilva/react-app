import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch("/artists/countByCity?cities=mumbai,banglore,hydrabad");

  return (
    <div className="featured">
      {loading ? (
        "Please wait. It's Loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/39/84/22/3984222d17a21997422c7e424d5464e8.jpg"
              className="featuredImg"
              alt="Mumbai"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} artists</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://imgs.search.brave.com/ur3V3AgxEXgyLZ-eMk1DZHPHJ6o3ajxsuJOxxXRb2yU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTU0NTU5MjEyLHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM"
              className="featuredImg"
              alt="Banglore"
            />
            <div className="featuredTitles">
              <h1>Banglore</h1>
              <h2>{data[1]} artists</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/0d/a7/bd/0da7bdeca48552dd24b802a2e6d15b0a.jpg"
              className="featuredImg"
              alt="Hyderabad"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[2]} artists</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
