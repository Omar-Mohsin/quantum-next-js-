import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/navigation";
function WorkspaceSection({ myworkspaces , id }: any) {
  const router = useRouter();
  console.log(myworkspaces);

  const findWorkspaceById = myworkspaces.filter((workspace: any) => workspace.id === id)
  const moveToWorkspaceSetting = (id: number) => {
    router.push(`/workspace-settings/${id}`);
  };
  return (
    <div className="w-full md:w-1/2 mt-4 md:mt-0">
      <h1 className="text-2xl md:text-3xl mb-4">Other Workspaces</h1>

        {findWorkspaceById.map((workspace: any) => (
        <div
          className="mb-4 flex flex-col md:flex-row justify-between items-center"
          key={myworkspaces.id}
        >
          <div>
            <h2 className="text-lg font-bold">{workspace.workspace_name}</h2>
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Created at</p>
            <p className="text-sm text-gray-600">Created by</p>
          </div>
          {/* icons */}
          <div className="flex items-center gap-2">
            <NotificationsIcon className="cursor-pointer" />
            <SettingsIcon
              onClick={() => moveToWorkspaceSetting(1)}
              className="cursor-pointer"
            />
            <DeleteIcon className="cursor-pointer" />
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
            Switch Workspace
          </button>
        </div>
      )) }
    </div>
  );
}

export default React.memo(WorkspaceSection);
