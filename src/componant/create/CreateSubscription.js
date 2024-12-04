import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import api from "../../Data/api";
import { ADD } from "../../Functions/apiFunction";
import useCustomNavigation from "../../Functions/useCustomNavigation";
import tokenContext from "../../context/token/tokenContext";

export default function CreateSubscription() {
  const tok = useContext(tokenContext);
  const token = tok.token;

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    product_id: "",
    customer_name_id: "",
    product_name_id: "",
    product_quantity: "",
    total_quantity: "",
    subscription_name: "",
  });
  const { navigateToPath } = useCustomNavigation();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${api}/add_cat`;
    const path = "/Subscription";
    const alert = "Subscription";
    await ADD(token, url, data, navigateToPath, path, setLoader, alert);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <nav
              aria-label="breadcrumb"
              style={{ "--bs-breadcrumb-divider": "none" }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Dashboard </NavLink>/
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/Subscription">Subscription </NavLink>/
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Create Subscription
                </li>
              </ol>
            </nav>
            <div className="col-lg-12 col-sm-12">
              <div className="content-page-header">
                <h5>Create Subscription</h5>
              </div>
              <div className="row">
                {/* Customer Name */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Customer Name</label>
                    <select
                      name="customer_name_id"
                      className="form-select"
                      required
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Customer --</option>
                      <option value="1">Customer 1</option>
                    </select>
                  </div>
                </div>

                {/* Product Name */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Product Name</label>
                    <select
                      name="product_name_id"
                      className="form-select"
                      required
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Product --</option>
                      <option value="1">Product 1</option>
                    </select>
                  </div>
                </div>

                {/* Product Quantity */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Product Quantity</label>
                    <input
                      type="number"
                      name="product_quantity"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Product Quantity"
                      required
                    />
                  </div>
                </div>

                {/* Total Amount */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Total Amount</label>
                    <input
                      type="number"
                      name="total_amount"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Total Amount"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="date"
                      name="total_quantity"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Date"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="date"
                      name="total_quantity"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Date"
                      required
                    />
                  </div>
                </div>

                {/* Total Quantity */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Total Quantity</label>
                    <input
                      type="number"
                      name="total_quantity"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Total Quantity"
                      required
                    />
                  </div>
                </div>

                {/* Subscription Name */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Subscription Name</label>
                    <input
                      type="text"
                      name="subscription_name"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Enter Subscription Name"
                      required
                    />
                  </div>
                </div>

                {/* Submit and Back Button */}
                <div className="btn-path">
                  <Link to={"/subscription"} className="btn btn-cancel me-3">
                    Back
                  </Link>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
