"use client";
import React from "react";

function ShowWorkspaces({ workspaces }: any) {
  const deleteWorkspace = (id: number) => {};
  const transferOwnership = (id: number) => {};

  return (
    <div className="mt-8">
      <div
        className="ml-10 text-2xl font-bold"
        style={{ whiteSpace: "nowrap" }}
      >
        Workspace Settings
      </div>
      <table className="w-full mt-8 border border-gray-300">
        <thead className="bg-gray-100 w-full">
          <tr>
            <th className="p-4 md:w-1/4 text-gray-700">Name</th>
            <th className="p-4 md:w-1/4 text-gray-700">Created At</th>
            <th className="p-4 md:w-1/4 text-gray-700">Created By</th>
            <th className="p-4 md:w-1/4 text-gray-700">Owner</th>
            <th className="p-4"></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {workspaces.map((workspace: any) => (
            <tr
              key={workspace.id}
              className="border-b border-gray-300 hover:bg-gray-50 transition"
            >
              <td className="p-4 text-center ">{workspace.name}</td>
              <td className="p-4  text-center">{workspace.created_at}</td>
              <td className="p-4 text-center">{workspace.created_by}</td>
              <td className="p-4 text-center  ">{workspace.owner}</td>
              <td className="p-4">
                <button
                  onClick={() => transferOwnership(workspace.id)}
                  className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
                  style={{ whiteSpace: "nowrap" }}

                >
                  Transfer Ownership
                </button>
              </td>
              <td className="p-4">
                <button
                  onClick={() => deleteWorkspace(workspace.id)}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                  style={{ whiteSpace: "nowrap" }}

                >
                  Delete Workspace
                </button>
              </td>
              <td className="p-4"> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowWorkspaces;
