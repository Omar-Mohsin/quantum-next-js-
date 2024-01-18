"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CampaignSettings from "@/components/Campaign/CampaignSettings";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
function page({ params }: any) {
  const user = useSelector(SelectUser);

  const { id } = params;
  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost/api/v1/campaign/bycampid/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
      .then((res) => {
        setCampaign(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  }, []);

  return (
    <div>
      <CampaignSettings campaign={campaign} />
    </div>
  );
}

export default page;
