import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../reducers/user.reducer";

function UserEdit() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(userData.firstName);
  const [editedLastName, setEditedLastName] = useState(userData.lastName);
  const [editedUserName, setEditedUserName] = useState(userData.userName);
  const inputRef = useRef(null);

  useEffect(() => {
    setEditedFirstName(userData.firstName);
    setEditedLastName(userData.lastName);
  }, [userData.firstName, userData.lastName]);

  let token = "";
  const getToken = () => {
    token = window.sessionStorage.getItem("token");
    if (!token) {
      token = window.localStorage.getItem("token");
    }
    return token;
  };
  getToken();

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedFirstName(userData.firstName);
    setEditedLastName(userData.lastName);
    setEditedUserName(userData.userName);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: editedFirstName,
          lastName: editedLastName,
          userName: editedUserName,
        }),
      });
      if (response.ok) {
        const updatedUser = await response.json(); 
        dispatch(updateUser(updatedUser.body));
      } else {
        console.error("Erreur lors de l'édition de l'utilisateur");
      }
    } catch (error) {
      console.error("Erreur lors de l'édition de l'utilisateur");
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData.firstName} {userData.lastName}!
      </h1>
      {isEditing ? (
        <div>
          <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
            className="input-button"
            placeholder="First Name"
          />
          <input
            type="text"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
            className="input-button"
            placeholder="Last Name"
          />
          <input
            type="text"
            value={editedUserName}
            onChange={(e) => setEditedUserName(e.target.value)}
            className="input-button"
            placeholder="Username"
          />
          </div>
          <div className="edit-container">
          <button onClick={handleSaveClick} className="edit-button">Save</button>
          <button onClick={handleCancelClick} className="edit-button">Cancel</button>
          </div>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEditButtonClick}>
          Edit Name
        </button>
      )}
    </div>
  );
}

export default UserEdit;
