import useFetch from "../../hooks/useFetch";
import "./genreList.css";

const GenreList = () => {
  const { data, loading } = useFetch("/artists/countByType");

  const images = [
    "https://i.pinimg.com/564x/8a/2b/34/8a2b34e08a7c4fc25ecb4aef5202248f.jpg",
    "https://i.pinimg.com/236x/26/be/1c/26be1c5c427834e6bcdcd7ee9aac0f58.jpg",
    "https://i.pinimg.com/564x/22/75/d0/2275d0b42cbf3b8d3b7d5c827a5dfda6.jpg",
    "https://i.pinimg.com/564x/d3/14/93/d31493005344159c2218cb747c7a8f86.jpg",
    "https://i.pinimg.com/564x/25/59/45/255945f035129a3bf294f719d18da551.jpg"
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data && images.map((img, i) => {
            const item = data[i];
            if (!item) return null; // Skip if no matching data

            return (
              <div className="pListItem" key={i}>
                <img src={img} alt={`Genre ${item.genre}`} className="pListImg" />
                <div className="pListTitles">
                  <h1>{item.genre}</h1>
                  <h2>{item.count} artist{item.count > 1 ? "s" : ""}</h2>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default GenreList;
