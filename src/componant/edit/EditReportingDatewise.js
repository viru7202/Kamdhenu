import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import api from "../../Data/api";
import { ADD } from "../../Functions/apiFunction";
import useCustomNavigation from "../../Functions/useCustomNavigation";
import tokenContext from "../../context/token/tokenContext";

export default function EditReportingDatewise() {
  const { token } = useContext(tokenContext); // Using destructuring for cleaner access to the token context
  const [isLoading, setIsLoading] = useState(false); // Renamed loader to isLoading for clarity

  const [formData, setFormData] = useState({
    date: "", // Proper field naming: 'total_quantity' changed to 'date'
    deliveryBoyId: "", // Renamed 'customer_name_id' to 'deliveryBoyId' for clarity
    hours: "", // Renamed 'product_quantity' to 'hours'
    area: "", // Renamed 'subscription_name' to 'area'
  });

  const { navigateToPath } = useCustomNavigation();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    const url = `${api}/add_cat`;
    const redirectPath = "/Subscription";
    const alertMessage = "Subscription added successfully";

    try {
      await ADD(token, url, formData, navigateToPath, redirectPath, setIsLoading, alertMessage);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Hide loading indicator after submission
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": "none" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Dashboard</NavLink> /
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/reporting-datewise">Reporting Datewise</NavLink> /
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Reporting Datewise
                </li>
              </ol>
            </nav>

            <div className="col-lg-12 col-sm-12">
              <div className="content-page-header">
                <h5>Edit Reporting Datewise</h5>
              </div>

              <div className="row">
                {/* Date Field */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Delivery Boy Field */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Delivery Boy</label>
                    <select
                      name="deliveryBoyId"
                      className="form-select"
                      value={formData.deliveryBoyId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- Select Delivery Boy --</option>
                      <option value="1">Delivery Boy 1</option>
                      <option value="2">Delivery Boy 2</option>
                    </select>
                  </div>
                </div>

                {/* Hours Field */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Hours</label>
                    <input
                      type="number"
                      name="hours"
                      className="form-control"
                      value={formData.hours}
                      onChange={handleInputChange}
                      placeholder="Enter Hours"
                      required
                    />
                  </div>
                </div>

                {/* Area Field */}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Area</label>
                    <input
                      type="text"
                      name="area"
                      className="form-control"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="Enter Area"
                      required
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="btn-path mt-4">
                  <Link to="/edit-reportingdatewise" className="btn btn-cancel me-3">
                    Back
                  </Link>
                  <button type="submit" className="btn btn-submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
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
