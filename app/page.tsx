"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import CampaignSection from "@/components/Home/CampaignSection";
import WorkspaceSection from "@/components/Home/WorkspaceSection";
import { useRouter } from "next/navigation";
import {
  SelectUser,
  SelectUserDetails,
  addUserDetails,
} from "@/redux/auth/authSlice";
import { Campaign } from "@/types/types";

const apiBaseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:80/api/v1";
const api = axios.create({
  baseURL: apiBaseURL,
  headers: {
    Accept: "application/json",
  },
});

function Home() {
  const router = useRouter();
  const [myCampaign, setMyCampaign] = useState<Campaign[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  const user = useSelector(SelectUser);
  const userDetails = useSelector(SelectUserDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    api
      .get("/users/me", {
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    if (userDetails) {
      api
        .get(`/campaign/byid/${userDetails.id}`, {
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

  return (
    <>
      {loading && <p>Loading...</p>}
      {user ? (
        <div className="flex flex-col p-4 md:p-8 mt-12 md:mt-40">
          <div className="flex flex-col md:flex-row">
            <CampaignSection myCampaign={myCampaign} />
            {/* Vertical Line */}
            <div className="w-1 h-18 bg-gray-500 mx-4"></div>
            <WorkspaceSection />
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
