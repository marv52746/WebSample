import React from "react";
import { useSelector } from "react-redux";
import FormComponent from "../../core/components/FormComponent"; // Adjust path as needed

const UserForm = () => {
  const users = useSelector((state) => state.userList.users); // Adjust according to your Redux state structure
  const columns = ["email", "username", "fullname", "address"];
  return (
    <div>
      <FormComponent initialData={users} columns={columns} />
    </div>
  );
};

export default UserForm;
