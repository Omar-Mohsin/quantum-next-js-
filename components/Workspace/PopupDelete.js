import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import axios from "axios";

function PopupDelete({id}) {
  const deleteWorkspace = () => {

    axios
      .delete(`http://localhost:80/api/v1/workspace/byid/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    
      <Popup
        trigger={
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
            style={{ whiteSpace: "nowrap" }}
          >
            Delete Workspace
          </button>
        }
      >
        {(close) => (
          <StyledPopupContent>
            <h2 className="text-2xl font-bold mb-4">Are you sure</h2>

            <div className="flex mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mr-2 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => {
                  deleteWorkspace();
                  close();
                }}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => close()}
              >
                Cancel
              </button>
            </div>
          </StyledPopupContent>
        )}
      </Popup>
    
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

export default PopupDelete;
