import React from "react";
import PopupDelete from "./PopupDelete";
function ShowWorkspaces({ workspace }: any) {
  const deleteWorkspace = (id: number) => {};
  const transferOwnership = (id: number) => {};
  console.log(workspace[0]);
  return (
    <div className="mt-8">
      <div className="ml-10 text-2xl font-bold whitespace-nowrap">
        Workspace Settings
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mt-8 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">Name</th>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">
                Created At
              </th>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">
                Created By
              </th>
              <th className="p-4 md:w-1/4 lg:w-1/5 text-gray-700">Owner</th>
              <th className="p-4 md:w-1/8 lg:w-1/10"></th>
              <th className="p-4 md:w-1/8 lg:w-1/10"></th>
            </tr>
          </thead>
          <tbody>
            
          {workspace.map((workspace: any) => (
              <tr
                key={workspace.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-center md:w-1/4 lg:w-1/5">
                  {workspace.name}
                </td>
                <td className="p-4 text-center md:w-1/4 lg:w-1/5">
                  {workspace.created_at}
                </td>
                <td className="p-4 text-center md:w-1/4 lg:w-1/5">
                  {workspace.created_by}
                </td>
                <td className="p-4 text-center md:w-1/4 lg:w-1/5">
                  {workspace.owner}
                </td>
                <td className="p-4 md:w-1/8 lg:w-1/10">
                  <button
                    onClick={() => transferOwnership(workspace.id)}
                    className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Transfer Ownership
                  </button>
                </td>
                <td className="p-4 md:w-1/8 lg:w-1/10">
                <PopupDelete id ={workspace.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowWorkspaces;
