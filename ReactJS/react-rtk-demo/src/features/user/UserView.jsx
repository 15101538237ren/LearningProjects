import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserList } from "./userSlice";

function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>{user.error}</div>}
      {!user.loading && user.users.length
        ? user.users.map((user) => <p key={user.id}>{user.name}</p>)
        : null}
    </div>
  );
}

export default UserView;
