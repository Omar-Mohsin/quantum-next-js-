"use client";
import React, { useState } from "react";
import axios from "axios";
import InputField from "@/components/InputField";
import Checkbox from "@/components/Checkbox";
import Actor from "@/components/Create-Campaign/Actor";
import Post from "@/components/Create-Campaign/Post";
import MultiplePosts from "@/components/Create-Campaign/MultiplePosts";
import Author from "@/components/Create-Campaign/Author";

function page() {


  const [data, setData] = useState({
    campaign_name: "",
    target: {},
    platforms: [],
    start_data: "",
    end_data: "",
  });

  const [disableEndDate, setDisableEndDate] = useState(false);
  const [selectedType, setSelectedType] = useState("Post"); 
  const addDictionary = () => {}
  
  const onCheckboxChange = (e: any) => {
    setDisableEndDate(!disableEndDate);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const createCampaign = () => {};

  const handlePlatformCheckboxChange = (event : any) => {
    const { name, checked } = event.target;
    setData((prevData : any) => {
      let updatedPlatforms;
      if (name === 'all') {
        updatedPlatforms = checked ? ['Twitter', 'Facebook', 'Instagram'] : [];
      } else {
        updatedPlatforms = checked
          ? [...prevData.platforms, name]
          : prevData.platforms.filter((platform  :any) => platform !== name);
      }

      return {
        ...prevData,
        platforms: updatedPlatforms,
      };
    });
  };
  
  const onChangeHandler = (e : any) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }

  console.log(data)
  return (
    <>
      <div className="p-6  h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 ">
          <div className="flex items-center ">
            <div className="mr-4 text-lg text-gray-600">Title</div>
            <InputField
              type="text"
              placeholder="Campaign Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              name="campaign_name"
              onChange ={onChangeHandler}
            />
          </div>
          <div className="ml-52">
            <div className="text-lg text-gray-600">Dates</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <div className="flex items-center">
              <div className="mr-4 text-lg text-gray-600 ">Types</div>
              <div className="flex mt-16 ml-5">
                <label className="mb-2 text-blue-600 mr-4">
                  <input
                    type="radio"
                    name="postType"
                    className="mr-2"
                    value="Post"
                    checked={selectedType === "Post"}
                    onChange={handleRadioChange}
                  />
                  Post
                </label>
                <label className="mb-2 text-blue-600 mr-4">
                  <input
                    type="radio"
                    name="postType"
                    className="mr-2"
                    value="Multiple Posts"
                    checked={selectedType === "Multiple Posts"}
                    onChange={handleRadioChange}
                  />
                  Multiple Posts
                </label>
                <label className="mb-2 text-blue-600 mr-4">
                  <input
                    type="radio"
                    name="postType"
                    className="mr-2"
                    value="Author"
                    checked={selectedType === "Author"}
                    onChange={handleRadioChange}
                  />
                  Author
                </label>
                <label className="mb-2 text-blue-600 mr-4">
                  <input
                    type="radio"
                    name="postType"
                    className="mr-2"
                    value="actor"
                    checked={selectedType === "actor"}
                    onChange={handleRadioChange}
                  />
                  actor
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-52">
            <div className="flex">
              <InputField
                type="datetime-local"
                placeholder="from"
                label="from"
                name="start_data"
                className="mb-4 mr-2 w-full p-2 border border-gray-300 rounded-md"
                onChange ={onChangeHandler}
              />

              <InputField
                type="datetime-local"
                placeholder="to"
                label="to"
                name="end_data"
                disabled={disableEndDate}
                onChange ={onChangeHandler}
              />
            </div>
            <div className="mt-4">
              <Checkbox label="Keep Monitoring" onChange={onCheckboxChange} />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
      {selectedType === "Post" && <Post />}
      {selectedType === "Multiple Posts" && <MultiplePosts addDictionary= {addDictionary} />}
      {selectedType === "Author" && <Author />}
      {selectedType === "actor" && <Actor />}


      </div>
      <div className="w-full flex flex-col items-start ml-10 ">
      <div className="flex flex-col mt-8 mb-10">
        <h1 className="text-4xl font-bold mb-6">Platforms</h1>
        <div className="mb-2">
          <Checkbox label="All" name ="all" onChange={handlePlatformCheckboxChange} />
        </div>
        <div className="mb-2">
          <Checkbox label="Twitter" name ="twitter"onChange={handlePlatformCheckboxChange}/>
        </div>
        <div className="mb-2">
          <Checkbox label="FaceBook" name='facebook' onChange={handlePlatformCheckboxChange} />
        </div> 
        <Checkbox label="Instagram" name ='instagram' onChange={handlePlatformCheckboxChange} />
      </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={createCampaign}
        >
          Create Campaign
        </button>

      </div>
    </>
  );
}

export default page;
