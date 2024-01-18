import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
function CampaignSection({ myCampaign }: any) {
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);

  const filteredCampaign = showAllCampaigns
    ? myCampaign
    : myCampaign?.slice(0, 2);

  return (
    <div className="w-full md:w-1/2 md:mr-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-0">Latest Campaigns</h1>
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
      <div className="flex flex-col">
        {filteredCampaign?.map((campaign: any) => (
          <div
            className="mb-4 md:flex md:justify-between md:items-center mt-6 md:p-5"
            key={campaign?.id}
          >
            <div>
              <h2 className="text-lg font-bold">{campaign?.campaign_name}</h2>
            </div>
            <div className="flex flex-col">progess bar</div>

            <div className="flex items-center gap-2">
              <span className="text-xl">status : running</span>

              <DeleteIcon className="ml-10 cursor-pointer" />
            </div>
            <Link href={`/campaign-settings/${campaign.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              View Campaign
            </button>
            </Link>
          </div>
        ))}
        <div className="mb-4 flex justify-center items-center mt-6 p-5">
          <button
            onClick={() => setShowAllCampaigns(!showAllCampaigns)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            {showAllCampaigns ? "Show Less Campaigns" : "View All Campaigns"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CampaignSection);
