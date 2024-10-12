import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../core/components/TableComponent";
import { getUsers } from "../../core/services/API/user";

function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userList);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    { key: "username", header: "UserName" },
    { key: "fullname", header: "Fullname" },
    { key: "email", header: "Email" },
  ];

  return (
    <div>
      <TableComponent
        path={"users"}
        columns={columns}
        initialData={users || []}
      />
    </div>
  );
}

export default Users;
