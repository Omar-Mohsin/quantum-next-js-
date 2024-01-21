import React, { useState } from "react";
import InputField from "../InputField";
import Checkbox from "../Checkbox";

function CampaignSettings({ campaign }: any) {
  const [data, setData] = useState({
    campaign_name: "",
    Type: {
      post: false,
      multiple_posts: false,
      author_profile_name: false,
    },
    start_data: "",
    end_data: "",
  });

  const [disableEndDate, setDisableEndDate] = useState(false);

  const onCheckboxChange = (e: any) => {
    setDisableEndDate(!disableEndDate);
  };

  const transferCampaign = (id: number) => {};
  const deletCampaign = (id: number) => {};
  return (
    <>
      <div className="p-6  h-full pt-20">
        <div className="text-3xl font-semibold mb-6  text-blue-600">
          Campaign Settings
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 ">
          <div className="flex items-center ">
            <div className="mr-4 text-lg text-gray-600">Title</div>
            <InputField
              type="text"
              placeholder="Campaign Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={campaign.campaign_name}
            />
          </div>
          <div className="ml-24">
            <div className="text-lg text-gray-600">Dates</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <div className="flex items-center">
              <div className="mr-4 text-lg text-gray-600">Types</div>
              <div className="flex flex-col mt-16 ml-5">
                <label className="mb-2 text-blue-600">
                  <input type="radio" name="postType" className="mr-2" />
                  Post
                </label>
                <label className="mb-2 text-blue-600">
                  <input type="radio" name="postType" className="mr-2" />
                  Multiple Posts
                </label>
                <label className="mb-2 text-blue-600">
                  <input type="radio" name="postType" className="mr-2" />
                  Author / Profile Name
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-24">
            <div className="flex">
              <InputField
                type="datetime-local"
                placeholder="from"
                label="from"
                name="start_data"
                value={campaign.start_date}
                className="mb-4 mr-2 w-full p-2 border border-gray-300 rounded-md"
              />

              <InputField
                type="datetime-local"
                placeholder="to"
                label="to"
                name="end_data"
                value={campaign.end_date}
                disabled={disableEndDate}
              />
            </div>
            <div className="mt-4">
              <Checkbox label="Keep Monitoring" onChange={onCheckboxChange} />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Save
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-start ml-10 ">
        <button
          className="bg-green-500 hover:bg-green-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => transferCampaign(campaign.id)}
        >
          Transfer campaign to another workspace
        </button>
        <button
          className="bg-red-500 hover:bg-red-700  text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => deletCampaign(campaign.id)}
        >
          Delete campaign
        </button>
      </div>
    </>
  );
}

export default CampaignSettings;
