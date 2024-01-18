// Collaborators.js
"use client";
import React, { useState } from "react";
import Checkbox from "@/components/Checkbox";
import CollaboratersSection from "./CollaboratersSection";
import "reactjs-popup/dist/index.css";
import PopupInvite from "./PopupInvite";

function Collaborators({ collab }: any) {
  const [collaboratorsData, setCollaboratorsData] = useState(
    collab.map((collaborator: any) => ({
      id: collaborator.id,
      permissions: {
        can_view: false,
        can_edit: false,
        can_delete: false,
        can_invite: false,
      },
    }))
  );

  const handlePermissionChange = (collaboratorId: string, permission: string, value: boolean) => {
    setCollaboratorsData((prevData : any) => {
      const updatedCollaborators = prevData.map((collaborator : any) =>
        collaborator.id === collaboratorId
          ? { ...collaborator, permissions: { ...collaborator.permissions, [permission]: value } }
          : collaborator
      );
      return updatedCollaborators;
    });
  };
  console.log(collaboratorsData)

  return (
    <div className="mt-10 mb-10">
      <div className="ml-10 text-2xl font-bold whitespace-nowrap">
        Collaborators ACL
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mt-8 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">Name</th>
              <th className="p-4 md:w-3/4 lg:w-3/5 text-gray-700">
                Permissions
              </th>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">Status</th>
              <th className="p-4 md:w-1/5 lg:w-1/5"></th>
              <th className="p-4 md:w-1/5 lg:w-1/10"></th>
            </tr>
          </thead>
          <tbody>
            {collab.map((collaborator: any) => (
             <CollaboratersSection collaborator={collaborator} onChange={handlePermissionChange} />
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-10">
          <PopupInvite/>
          </div>
      </div>
    </div>
  );
}

export default Collaborators;
