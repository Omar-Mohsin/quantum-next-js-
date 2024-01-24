"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CampaignSection from "@/components/Home/CampaignSection";
import WorkspaceSection from "@/components/Home/WorkspaceSection";
import { useRouter } from "next/navigation";
import {
  SelectUser,
} from "@/redux/auth/authSlice";
import { Campaign } from "@/types/types";



function Home({params} : any) {
  const router = useRouter();

  const {id} = params
  const [myCampaign, setMyCampaign] = useState<Campaign[] | undefined>(
    undefined
  );
  const [workspaces, setWorkspaces] = useState();

  const user = useSelector(SelectUser);
  
  useEffect(() => {
    axios
      .get(`http://localhost:80/api/v1/workspace/byid/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
      .then((res) => {
        setMyCampaign(res?.data.campaigns);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, []);


  useEffect(() => {
    axios
      .get(`http://localhost:80/api/v1/workspace/`, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
      .then((res) => {
        setWorkspaces(res?.data);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, []);

  return (
    <>
      {user ? (
        <div className="flex flex-col p-4 md:p-8 mt-12 md:mt-40">
          <div className="flex flex-col md:flex-row">
            <CampaignSection myCampaign={myCampaign} />
            {/* Vertical Line */}
            <div className="w-1 h-18 bg-gray-500 mx-4"></div>
           {  workspaces &&(<WorkspaceSection myworkspaces ={workspaces} id={id}/>)}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-center h-screen">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <button
              className="text-2xl md:text-4xl mb-6 text-white bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(Home);
