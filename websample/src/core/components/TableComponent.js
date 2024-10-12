import React, { useState } from "react";
import "../../style/TableComponent.css"; // Import the CSS file
import { Link } from "react-router-dom";

const TableComponent = ({ path, columns, initialData }) => {
  const [items, setItems] = useState(initialData || []);

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="table-container">
      <h2>Item List</h2>

      <table className="styled-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
              <td>
                <Link to={`/${path}/form?id=${item._id}&view=view`}>
                  <button>View</button>
                </Link>
                <Link to={`/${path}/form?id=${item._id}&view=edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Default props
TableComponent.defaultProps = {
  columns: [],
  initialData: [],
  path: "",
};

export default TableComponent;
