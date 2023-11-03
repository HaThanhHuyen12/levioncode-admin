import React, { useEffect, useState } from "react";
import "./management.css";
import LayoutWithHeader from "../../components/layoutWithHeader";
import { BiSearch } from "react-icons/bi";
import  User  from "../../components/User";
import Course from "../../components/Course";

function Profile() {
  const [state, setState] = useState(1);
  const [searchUser, setSearchUser] = useState("");

  //   const handleSearch = (event) => {
  //     setSearchUser(event.target.value);
  //   };

  //   const filteredUsers = DataJson.filter((user) => {
  //     const normalizedSearchUser = searchUser.toLowerCase();
  //     const normalizedName = user.name.toLowerCase();
  //     return normalizedName.includes(normalizedSearchUser);
  //   });
  return (
    <div className="profile">
      <LayoutWithHeader>
        <div className="contents">
          <div className="second">
            <div className="tabs">
              <div
                onClick={() => setState(1)}
                className={`tab ${state === 1 ? "active-tab" : ""}`}
              >
                <p>User management</p>
              </div>
              <div
                onClick={() => setState(2)}
                className={`tab ${state === 2 ? "active-tab" : ""}`}
              >
                <p>Course management</p>
              </div>
              <div
                onClick={() => setState(3)}
                className={`tab ${state === 3 ? "active-tab" : ""}`}
              >
                <p>Payment management</p>
              </div>
            </div>
            <div className="contentTabs">
              <div className={`content ${state === 1 ? "content-active" : ""}`}>
                <div className="CntUser">
                  <div className="bodyContent"></div>
                  <div className="TableUser">
                    <User />
                  </div>
                </div>
              </div>
              <div className={`content ${state === 2 ? "content-active" : ""}`}>
                <div className="TableUser">
                  <Course />
                </div>
              </div>
              <div className={`content ${state === 3 ? "content-active" : ""}`}>
                <div className="Billing"></div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithHeader>
    </div>
  );
}
export default Profile;
