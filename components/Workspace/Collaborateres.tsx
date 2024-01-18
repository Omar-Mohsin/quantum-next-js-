// Collaborators.js
"use client";
import React, { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupInvite from "./PopupInvite";
function Collaborators({ collab }: any) {
  
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
              <tr
                key={collaborator.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-center md:w-1/4 lg:w-1/5">
                  {collaborator.name}
                </td>
                <td className="p-4 text-center w-3/4 md:w-1/4 lg:w-1/5">
                  <div className="flex justify-center">
                    <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
                      <Checkbox label="can view" />
                    </div>
                    <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
                      <Checkbox label="can edit" />
                    </div>
                    <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
                      <Checkbox label="can delete" />
                    </div>
                    <div className="flex w-1/4 md:w-1/5 lg:w-1/5 justify-center">
                      <Checkbox label="can invite" />
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
