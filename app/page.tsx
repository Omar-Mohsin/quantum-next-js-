'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser, SelectUserDetails, addUserDetails } from "@/redux/auth/authSlice";
import { Campaign } from '@/types/types';

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:80/api/v1';
const api = axios.create({
  baseURL: apiBaseURL,
  headers: {
    Accept: 'application/json',
  },
});

function Home() {
  const [myCampaign, setMyCampaign] = useState<Campaign[] | undefined>(undefined);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = useSelector(SelectUser);
  const userDetails = useSelector(SelectUserDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${user?.access_token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch(addUserDetails(response.data));
      })
      .catch((error) => {
        console.error(error.response.data);
        setError(error.response.data.message || 'An error occurred');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    if (userDetails) {
      api.get(`/campaign/byid/${userDetails.id}`, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
        .then((res) => {
          setMyCampaign(res?.data);
          console.log(res?.data);
        })
        .catch((error) => {
          console.log(error?.response.data);
        });
    }
  }, [user, userDetails]);

  const filteredCampaign = showAllCampaigns ? myCampaign : myCampaign?.slice(0, 2);

  return (
    <div className="flex flex-col p-4 md:p-8 mt-12 md:mt-40">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
  );
}

export default React.memo(Home);
