import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList, selectUserList } from "./features/userList/userListSlice";
import Table from "./components/table/Table";
import { selectUser } from "./features/user/userSlice";
import UserInfo from "./components/userInfo/UserInfo";
import AddUserForm from "./components/addUserForm/AddUserForm";
import axios from "./axios";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import generateMessage from "./components/generateMessage";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList);
  const user = useSelector(selectUser);

  useEffect(() => {
    // Get Data from Server fetch
    const fetchData = async () => {
      const response = await axios.get("/getUserList");
      generateMessage(response);
      dispatch(createList(response.data.data));
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app__form">
        <AddUserForm />
      </div>
      <div className="app__content">
        {userList && <Table />}
        {user && <UserInfo />}
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
