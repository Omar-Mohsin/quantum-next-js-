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

  const onCheckboxChange = (e:any) => {
  
    setDisableEndDate(!disableEndDate);
  };

  return (
    <div className="bg-gray-100 p-6  h-screen pt-28">
      <div className="text-3xl font-semibold mb-6 text-center text-blue-600">
        Campaign Settings
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 ml-44">
        <div className="flex items-center ml-32">
          <div className="mr-4 text-lg text-gray-600">Title</div>
          <InputField
            type="text"
            placeholder="Campaign Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={campaign.campaign_name}
          />
        </div>
        <div className="ml-24">
          <div className="text-lg text-gray-600">Date</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-44">
        <div>
          <div className="flex items-center ml-32">
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
              disabled

            />
          </div>
          <div className="mt-4">
            <Checkbox label="Keep Mon" onChange={onCheckboxChange} />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default CampaignSettings;
