import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../style/FormComponent.css"; // Create a CSS file for styles

const FormComponent = ({ initialData, columns }) => {
  const [formData, setFormData] = useState({});
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const view = queryParams.get("view");

  useEffect(() => {
    if (id !== null) {
      const item = initialData.find((user) => user._id === id);
      if (item) {
        setFormData(item);
      }
    }
  }, [id, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {columns.map((key) => (
          <div key={key} className="form-group">
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="text"
                name={key}
                value={formData[key] || ""}
                readOnly={view === "view"} // Set readOnly based on view parameter
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

// Default props
FormComponent.defaultProps = {
  initialData: [],
};

export default FormComponent;
