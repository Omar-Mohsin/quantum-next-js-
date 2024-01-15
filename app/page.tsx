'use client';
import Cookies from 'js-cookie';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Home() {
  const [myCampaign, setMyCampaign] = useState();
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
const user = Cookies.get('user')
const userDetails = Cookies.get("userDetails")
  console.log(userDetails)
  console.log(user)

  
  useEffect(() => {
    axios
      .get(`http://localhost:80/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        Cookies.set("userDetails", response.data);

      })
      .catch((error) => {
        console.log(error.response.data); 
      });
  }, []);
  
  useEffect(() => {
    axios
      .get(`http://localhost:80/api/v1/campaign/byid/1`, {
        headers: {
          Authorization: `Bearer ${user}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setMyCampaign(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, [user]);
  const filteredCampaign = showAllCampaigns
  ? myCampaign
  : myCampaign?.slice(0, 2);
  console.log(myCampaign)


  return (
    <div className="flex flex-col p-4 md:p-8 mt-12 md:mt-40">
      {user ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-2xl md:text-3xl mb-2 md:mb-0">
                Latest Campaigns
              </h1>
              <div className="flex gap-4 md:mr-8 mt-1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm">
                  Import a Campaign
                </button>
                <Link href="/create-campaign">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md text-sm">
                    Create a Campaign
                  </button>
                </Link>
              </div>
            </div>

            {/* Placeholder content */}
            <div className="flex flex-col">
              {filteredCampaign?.map((campaign : any) => (
                <div
                  className="mb-4 md:flex md:justify-between md:items-center mt-6 md:p-5"
                  key={campaign?.id}
                >
                  <div>
                    <h2 className="text-lg font-bold">
                      {campaign?.campaign_name}
                    </h2>
                  </div>
                  <div className="flex flex-col">progess bar</div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl">status : running</span>

                    <DeleteIcon className="ml-10 cursor-pointer" />
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    View Campaign
                  </button>
                </div>
              ))}
              <div className="mb-4 flex justify-center items-center mt-6 p-5">
                <button
                  onClick={() => setShowAllCampaigns(!showAllCampaigns)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  {showAllCampaigns
                    ? "Show Less Campaigns"
                    : "View All Campaigns"}
                </button>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="w-1 h-18 bg-gray-500 mx-4"></div>

          {/* Workspace section */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-2xl md:text-3xl mb-4">Other Workspaces</h1>
            <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Workspace 2</h2>
              </div>

              <div className="flex flex-col">
                <p className="text-sm text-gray-600">Created at</p>
                <p className="text-sm text-gray-600">Created by</p>
              </div>
              {/* icons */}
              <div className="flex items-center gap-2">
                <NotificationsIcon className="cursor-pointer" />
                <SettingsIcon className="cursor-pointer" />
                <DeleteIcon className="cursor-pointer" />
              </div>
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
                Switch Workspace
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center w-full md:w-1/2 pr-0 md:pr-8">
          <Link href="/login">
            <h1 className="text-2xl md:text-4xl mb-6 text-red-600 font-semibold">
              Please Login
            </h1>
          </Link>
        </div>
      )}
    </div>
  )
}
