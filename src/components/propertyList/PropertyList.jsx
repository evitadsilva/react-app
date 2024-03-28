import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/236x/d9/8b/b3/d98bb3d32d276056b392581e670540ec.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Bollywood</h1>
          <h2>2333 artists</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/236x/65/76/e0/6576e09ca0c2820b23b91d916f059388.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Jazz</h1>
          <h2>233 artists</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/236x/26/be/1c/26be1c5c427834e6bcdcd7ee9aac0f58.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Classical</h1>
          <h2>2331 artists</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="hhttps://i.pinimg.com/236x/38/e2/3a/38e23a8117cf49f1b3848f23144b3a25.jpg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Rock bands</h1>
          <h2>2331 artists</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/236x/78/6c/a0/786ca031f4809ff46dbe3c83001957b6.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Pop</h1>
          <h2>2331 artists</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;