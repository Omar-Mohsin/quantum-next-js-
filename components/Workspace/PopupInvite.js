import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import InputField from "../InputField";
import axios from "axios";
import Checkbox from "../Checkbox";

function PopupInvite() {
  const [email, setEmail] = useState("");

  const handleSendInvitation = () => {
    const data = {
      email: email,
      permission: ""
    };
    console.log(data);
  };

  return (
    <div>
      <Popup
        trigger={
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Invite Collaborator
          </button>
        }
      >
        {(close) => (
          <StyledPopupContent>
            <h2 className="text-2xl font-bold mb-4">Invite Collaborator</h2>
            <div className="flex">
              <InputField
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="Enter email"
              />
            </div>
            <div>
              <div className="mt-2">
              <Checkbox
                label="Can edit"
              />
              </div>
              <div className="mt-2">
              <Checkbox
                label="Can view"
              />
              </div>
              <div className="mt-2">
              <Checkbox
                label="Can delete"
                className="mb-4" 
              />
              </div>
              <div className="mt-2">
              <Checkbox
                label="Can invite"
                className="mb-4"
              />
             </div>
            </div>
            <div className="flex mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue2-500"
                onClick={() => {
                  handleSendInvitation();
                  close();
                }}
              >
                Send Invitation
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => close()}
              >
                Cancel
              </button>
            </div>
          </StyledPopupContent>
        )}
      </Popup>
    </div>
  );
}

const StyledPopupContent = styled.div`
  position: fixed;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default PopupInvite;
