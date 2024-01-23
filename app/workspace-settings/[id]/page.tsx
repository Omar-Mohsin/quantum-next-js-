'use client';
import React, { useEffect , useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import ShowWorkspaces from "@/components/Workspace/ShowWorkspaces";
import Collaborateres from "@/components/Workspace/Collaborateres";

function page({ params }: any) {
  const [workspace, setWorkspace] = useState();
  const id = params.id
  const user = useSelector(SelectUser); 
  useEffect(() => {
    axios
      .get(`http://localhost/api/v1/workspace/byid/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
      .then((res) => {
        setWorkspace(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, []);

  const collabData = {
    name : "test",
    email : ""
  }
  
  return (
    <div className="mt-7">
      <ShowWorkspaces workspace={workspace} />
      <Collaborateres collab={collabData} />
    </div>
  );
}

export default page;
