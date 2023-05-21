// import "./App.css";
import CategoryItem from "./components/category-item/category-item.component";
import "./categories.style.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  // const categories = [
  //   {
  //     id: 1,
  //     title: "Hat",
  //   },
  //   {
  //     id: 2,
  //     title: "Jackets",
  //   },
  //   {
  //     id: 3,
  //     title: "Sneakers",
  //   },
  //   {
  //     id: 4,
  //     title: "Womens",
  //   },
  //   {
  //     id: 5,
  //     title: "Mens",
  //   },
  // ];
  return (
    // <div className="categories-container">
    //   <div className="category-container">
    //     {/*<img />*/}
    //     <div className="category-body-container">
    //       <h2>Hats</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     {/*<img />*/}
    //     <div className="category-body-container">
    //       <h2>Jackets</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     {/*<img />*/}
    //     <div className="category-body-container">
    //       <h2>Sneakers</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     {/*<img />*/}
    //     <div className="category-body-container">
    //       <h2>Womens</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     {/*<img />*/}
    //     <div className="category-body-container">
    //       <h2>Mens</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    // </div>
    <div className="categories-container">
      {categories.map((category) => (
        // <div key={id} className="category-container">
        //   <div
        //     className="background-image"
        //     style={{
        //       backgroundImage: `url(${imageUrl})`,
        //     }}
        //   />
        //   <div className="category-body-container">
        //     <h2>{title}</h2>
        //     <p>Shop Now</p>
        //   </div>
        // </div>
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default App;
