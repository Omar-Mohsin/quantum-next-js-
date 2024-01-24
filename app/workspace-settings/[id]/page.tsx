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


  const data = [
    {
      id: 1,
      name: "boxer workspace",
      created_at: "2021-10-10",
      created_by: "boxer",
      owner: "boxer",
    },
  ];

  const collabData = [
    {
      id: 1,
      name: "boxer",
      status: "pending",
    },
    {
      id: 2,
      name: "omar",
      status: "accepted",
    },
    {
      id: 3,
      name: "omar",
      status: "accepted",
    },
  ];

  return (
    <div className="mt-7">
      <ShowWorkspaces workspace={data} />
      <Collaborateres collab={collabData} />
    </div>
  );
}

export default page;
