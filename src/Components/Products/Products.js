import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  console.log(products);

  return (
    <div>
      {/* Search section */}
      <div className="flex justify-between mx-10 my-5">
        <div className="flex">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Category
            </option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Hoodie</option>
            <option>Shorts</option>
          </select>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Size
            </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-active btn-primary">Add to cart</button>
        </div>
      </div>
      {/* Products section */}
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Color</th>
        <th>Stock</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product=><tr>
        <td>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
          {product.name}
        </td>
        <td>
          {product.color}
        </td>
        {!product.instock&&<td className="text-red-600">Not available</td>}
        {product.instock&&<td className="text-green-600">available</td>}
        <td>${product.price}</td>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
      </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Products;
