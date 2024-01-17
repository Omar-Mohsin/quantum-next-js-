"use client";
import React , {useState}from "react";
import Checkbox from "@/components/Checkbox";
function Collaborateres({ collab }: any) {
  
  const [checkboxState, setCheckboxState] = useState({
    canView: false,
    canEdit: false,
    canDelete: false,
    canInvite: false,
  });
  
  const toggleCheckboxChange = (name: string) => (event: any) => {
    setCheckboxState((prevState: any) => ({
      ...prevState,
      [name]: event.target.checked,
    }));
  };
  return (
    <div className="mt-8">
    <div className="ml-10 text-2xl font-bold">Collaborators ACL</div>

    <div className="flex-col mt-8 px-10">
      {collab.map((collaborator: any) => (
        <div
          className="flex w-full justify-between items-center bg-white p-4 "
          key={collaborator.id}
        >
          <div className="flex-grow">{collaborator.name}</div>

          {/* Checkboxes */}
          
          <div className="hidden md:flex md:w-1/4 justify-center">
            <Checkbox
              label="can view"
              isChecked={checkboxState.canView}
              toggleCheckboxChange={toggleCheckboxChange("canView")}
            />
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <Checkbox
              label="can edit"
              isChecked={checkboxState.canEdit}
              toggleCheckboxChange={toggleCheckboxChange("canEdit")}
            />
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <Checkbox
              label="can delete"
              isChecked={checkboxState.canDelete}
              toggleCheckboxChange={toggleCheckboxChange("canDelete")}
            />
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <Checkbox
              label="can invite"
              isChecked={checkboxState.canInvite}
              toggleCheckboxChange={toggleCheckboxChange("canInvite")}
            />
          </div>
          {/* Checkboxes */}
          
          <div className="hidden md:flex md:w-1/4 justify-center">
            {collaborator.status}
          </div>

          {/* Buttons */}
          {collaborator.status === "pending" ? (
            <div>
              <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 md:w-40">
                Cancel Invitation
              </button>
            </div>
          ) : (
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 md:w-40"
                style={{ whiteSpace: "nowrap" }}
              >
                Delete Collaborator
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
}

export default Collaborateres;
