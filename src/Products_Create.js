import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ProductContext from "./ProductsContext";
function Products_Create() {
  let [name, setname] = useState("");
  let [price, setprice] = useState("");
  let [author, setauthor] = useState("");
  let [availability, setavailability] = useState("");
  let [publication, setpublication] = useState("");
  let data = useContext(ProductContext);

  let productAppend = (e) => {
    e.preventDefault();
    data.setproduct([
      ...data.product,
      { name, price, author, availability, publication },
    ]);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={productAppend}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>User Form</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>Availability</label>
              <input
                type="text"
                className="form-control"
                value={availability}
                onChange={(e) => setavailability(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Publication</label>
              <input
                type="text"
                className="form-control"
                value={publication}
                onChange={(e) => setpublication(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <button
                className="btn btn-info mt-5"
                id="user_reg"
                style={{ marginTop: 0 + "px" }}
              >
                Submit!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Products_Create;
