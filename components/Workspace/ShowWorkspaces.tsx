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
        <div className="flex w-full justify-between items-center bg-white p-4 mt-8 justify-center ">
          <div className="hidden md:flex md:w-1/4">
            <div className="text-gray-500">Name</div>
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <div className="text-gray-500">Created At</div>
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <div className="text-gray-500">Created By</div>
          </div>
          <div className="hidden md:flex md:w-1/4 justify-center">
            <div className="text-gray-500">Owner</div>
          </div>
      </div>
      <div className="flex-col mt-8 px-10 w-full">
        {workspaces.map((workspace: any) => (
          <div
            className="flex w-full justify-between items-center bg-white p-4"
            key={workspace.id}
          >
            <div className="hidden md:flex md:w-1/4 justify-center">
              {workspace.name}
            </div>
            <div className="hidden md:flex md:w-1/4 justify-center">
              {workspace.created_at}
            </div>
            <div className="hidden md:flex md:w-1/4 justify-center">
              {workspace.created_by}
            </div>
            <div className="hidden md:flex md:w-1/4 justify-center">
              {workspace.owner}
            </div>
            <div className="mr-6">
              <button
                onClick={() => transferOwnership(workspace.id)}
                className="bg-green-500 hover:bg-green-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 md:w-40"
                style={{ whiteSpace: "nowrap" }}
              >
                Transfer Ownership
              </button>
            </div>
            <div>
              <button
                onClick={() => deleteWorkspace(workspace.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 md:w-40"
              >
                Delete Workspace
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowWorkspaces;
