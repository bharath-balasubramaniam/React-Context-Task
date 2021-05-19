import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "./ProductsContext";
function Products() {
  let item = useContext(ProductContext);
  return (
    <>
      <h1>Users</h1>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Products</h1>
        <p class="mb-4">
          DataTables is a just a demo model for the React Context topic. I can
          able to pass the values globally through context.. For more
          information check my codes on github🤞
        </p>
        <h4>
          <Link to="Products/Create">Create Product / Add Product</Link>
        </h4>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Availabilty</th>
                    <th>Publication</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Availabilty</th>
                    <th>Publication</th>
                  </tr>
                </tfoot>
                <tbody>
                  {item.product.map((obj) => {
                    return (
                      <tr>
                        <td>{obj.name}</td>
                        <td>{obj.price}</td>
                        <td>{obj.author}</td>
                        <td>{obj.availability}</td>
                        <td>{obj.publication}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
