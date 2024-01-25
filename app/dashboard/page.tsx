"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { workspace } from "@/types/types";
import { getCookie } from "cookies-next";
function page() {
  const token = getCookie("token");

  const router = useRouter();
  const [workspaces, setWorkspaces] = useState();

  const movetoWorkspaceById = (id: number) => {
    router.push(`/dashboard/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:80/api/v1/workspace`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWorkspaces(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, [token]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl text-blue-500">Welcome</h1>
        <h2 className="text-2xl text-blue-500 mt-1 mb-4">
          Select your Workspace
        </h2>
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="flex flex-col justify-center items-center mt-20">
              {workspaces?.map((workspace: workspace) => (
                <div
                  key={workspace.id}
                  className="flex flex-col justify-center items-center mt-20"
                >
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => movetoWorkspaceById(workspace.id)}
                  >
                    {workspace.workspace_name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
