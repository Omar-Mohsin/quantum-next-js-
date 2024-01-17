// Collaborateres.js
"use client";
import React, { useState } from "react";
import Checkbox from "@/components/Checkbox";
import withCheckboxState from "@/components/WithCheckboxState";

function Collaborateres({ collab }: any) {
  const CheckboxWithState = withCheckboxState(Checkbox);

  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: any }>({});

  const updateCheckboxStates = (collaboratorId: string, checkboxStates: any) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [collaboratorId]: checkboxStates,
    }));
  };

  const handleGetCheckedData = (collaboratorId: string) => {
    const checkedData = checkboxStates[collaboratorId];
    console.log("Checked Data for Collaborator", collaboratorId, ":", checkedData);
  };

  return (
    <div className="mt-20">
      <div className="ml-10 text-2xl font-bold">Collaborators ACL</div>

      <div className="flex-col mt-8 px-10">
        {collab.map((collaborator: any) => (
          <div
            className="flex w-full justify-between items-center bg-white p-4 "
            key={collaborator.id}
          >
            <div className="flex-grow">{collaborator.name}</div>

            <div className="flex justify-center w-2/5">
              <div className="hidden md:flex md:w-1/4 justify-center">
                <CheckboxWithState
                  label="can view"
                  onChange={(isChecked: boolean) => updateCheckboxStates(collaborator.id, { canView: isChecked })}
                />
              </div>
              <div className="hidden md:flex md:w-1/4 justify-center">
                <CheckboxWithState
                  label="can edit"
                  onChange={(isChecked: boolean) => updateCheckboxStates(collaborator.id, { canEdit: isChecked })}
                />
              </div>
              <div className="hidden md:flex md:w-1/4 justify-center">
                <CheckboxWithState
                  label="can delete"
                  onChange={(isChecked: boolean) => updateCheckboxStates(collaborator.id, { canDelete: isChecked })}
                />
              </div>
              <div className="hidden md:flex md:w-1/4 justify-center">
                <CheckboxWithState
                  label="can invite"
                  onChange={(isChecked: boolean) => updateCheckboxStates(collaborator.id, { canInvite: isChecked })}
                />
              </div>
            </div>

            <div className="hidden md:flex md:w-1/4 justify-center">
              {collaborator.status}
            </div>

            {/* Buttons */}
            {collaborator.status === "pending" ? (
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 md:w-40"
                >
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
