import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import api from "../../Data/api";
import { ADD } from "../../Functions/apiFunction";
import useCustomNavigation from "../../Functions/useCustomNavigation";
import tokenContext from "../../context/token/tokenContext";

export default function CreateOtherProductOrder() {
  const tok = useContext(tokenContext);
  const token = tok.token;

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    product_id: "",
    customer_name_id: "",
    product_name_id: "",
    product_quantity: "",
    total_quantity: "",
    total_amount: "",
    payment_status: "",
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
    const alertMessage = "Subscription added successfully!";
    await ADD(token, url, data, navigateToPath, path, setLoader, alertMessage);
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
                  <NavLink to="/other-product-order">Other Product Order </NavLink>/
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Create Other Product Order
                </li>
              </ol>
            </nav>

            <div className="col-lg-12 col-sm-12">
              <div className="content-page-header">
                <h5>Create Other Product Order</h5>
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
                      <option value="2">Customer 2</option>
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
                      <option value="2">Product 2</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Order Date</label>
                    <input
                      type="date"
                      name="product_quantity"
                      className="form-control"
                      onChange={handleInputChange}
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

                {/* Payment Status */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Payment Status</label>
                    <select
                      name="payment_status"
                      className="form-select"
                      required
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Payment Status --</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Success">Success</option>
                    </select>
                  </div>
                </div>

                {/* Submit and Back Buttons */}
                <div className="col-12 mt-4">
                  <div className="btn-path">
                    <Link to="/other-product-order" className="btn btn-cancel me-3">
                      Back
                    </Link>
                    <button type="submit" className="btn btn-submit">
                      {loader ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
