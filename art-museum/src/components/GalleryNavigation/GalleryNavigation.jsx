import { NavLink, Link } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
  console.log(galleries.galleries);

  const navLinks = galleries.map((gallery) => (
    <li key={gallery.id}>
      <NavLink
        className={({ isActive }) => (isActive ? ("isActive") : "")}
        // style={({ isActive }) => (isActive ? { color: "red" } : {})}
        to={`galleries/${gallery.id}`}
      >
        {gallery.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <h1>Galleries</h1>
      <ul>{navLinks}</ul>
    </>
  );
}

export default GalleryNavigation;

//# ------------------lkjahsldkfjhsdf------------------
//
//  <li>
//    <NavLink to="/">Home</NavLink>
//  </li>;

// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );
