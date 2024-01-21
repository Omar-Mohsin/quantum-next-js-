import React from "react";
import Checkbox from "../Checkbox";

function CollaboratersSection({ collaborator, onChange }: any) {
  return (
    <tr
      key={collaborator.id}
      className="border-b border-gray-300 hover:bg-gray-50 transition"
    >
      <td className="p-4 text-center md:w-1/4 lg:w-1/5">{collaborator.name}</td>
      <td className="p-4 text-center w-3/4 md:w-1/4 lg:w-1/5">
        <div className="flex justify-center">
          <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
            <Checkbox
              label="can view "
              onChange={() => onChange("can_view")}
              name={"can_view"}
            />
          </div>
          <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
            <Checkbox
              label="can edit"
              onChange={() => onChange("can_edit")}
              name={"can_edit"}
            />
          </div>
          <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
            <Checkbox
              label="can delete"
              name={"can_delete"}
              onChange={() => onChange("can_delete")}
            />
          </div>
          <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
            <Checkbox
              label="can invite"
              name={"can_invite"}
              onChange={() => onChange("can_invite")}
            />
          </div>
        </div>
      </td>
      <td className="p-4 text-center md:w-1/4 lg:w-1/5">
        {collaborator.status}
      </td>
      <td className="p-4 md:w-1/5 lg:w-1/10"></td>
      <td className="p-4 md:w-1/5 lg:w-1/10">
        {collaborator.status === "pending" ? (
          <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 w-full">
            Cancel Invitation
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            style={{ whiteSpace: "nowrap" }}
          >
            Delete Collaborator
          </button>
        )}
      </td>
    </tr>
  );
}

export default CollaboratersSection;
