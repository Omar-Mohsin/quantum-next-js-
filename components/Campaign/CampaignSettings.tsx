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

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md h-screen pt-20">
      <div className="text-3xl font-semibold mb-6 text-center">Campaign Settings</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <InputField
            label="Title"
            type="text"
            placeholder="Campaign Name"
            className="w-full"
            value = {campaign.campaign_name}
          />
        </div>
        <div className="ml-4">
          <div className="text-lg">Date</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="flex justify-center items-center mr-7">
            <div className="mr-7 text-lg">Types</div>
            <div className="flex flex-col mt-4">
              <label className="mb-2">
                <input type="radio" name="postType" />
                Post
              </label>
              <label className="mb-2">
                <input type="radio" name="postType" />
                Multiple Posts
              </label>
              <label className="mb-2">
                <input type="radio" name="postType" />
                Author / Profile Name
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <InputField
              type="datetime-local"
              placeholder="Start Date"
              label="Start Date"
              name="start_data"
              value={campaign.start_date}
              onChange={onChange}
              className="mb-4 mr-2 w-full"
            />
            <InputField
              type="datetime-local"
              placeholder="End Date"
              label="End Date"
              name="end_data"
              value={campaign.end_date}
              onChange={onChange}
              className="mb-4 ml-2 w-full"
            />
          </div>
          <div className="mt-4">
            <Checkbox label="Keep Mon" />
          </div>
        </div>
        <div className="flex flex-col">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Save
            </button>
            </div>
      </div>
    </div>
  );
}

export default CampaignSettings;
