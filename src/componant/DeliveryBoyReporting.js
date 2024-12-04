import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import api from "../Data/api"; // Update path
import tokenContext from "../context/token/tokenContext"; // Update path

function DeliveryBoyReporting() {
  const [customerData, setCustomerData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data for search
  const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page

  const { token } = useContext(tokenContext); // Access token from context

  // Fetch customer data from the API
  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(`${api}/get_cat`, {
        headers: { Authorization: token },
      });
      setCustomerData(response.data.data);
      setFilteredData(response.data.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchCustomerData();
  }, []);

  // Pagination logic
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0); // Reset page to 0
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = customerData.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        if (typeof value === "number") {
          return value.toString().includes(query);
        }
        return false;
      })
    );
    setFilteredData(filtered);
    setCurrentPage(0); // Reset to first page after filtering
  };

  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <nav
          aria-label="breadcrumb"
          style={{ "--bs-breadcrumb-divider": "none" }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Dashboard </NavLink>/
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Delivery Boy Reporting
            </li>
          </ol>
        </nav>
        <div className="content-page-header content-page-headersplit">
          <h5>Delivery Boy Reporting</h5>
        </div>

        <div className="d-flex justify-content-between">
        
          <div className="col-lg-4">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search Customer"
                type="text"
                onChange={handleSearch}
              />
            </div>
          </div>
          
        </div>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Index</th>
                <th>Delivery Boy Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Current Area</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1 + currentPage * itemsPerPage}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.currentArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav className="mt-4 d-flex justify-content-between align-items-center">
          <select
            className="form-select"
            style={{ width: "70px" }}
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
          />
        </nav>
      </div>
    </div>
  );
}

export default DeliveryBoyReporting;
