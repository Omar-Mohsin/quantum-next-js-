'use client';
import React , {useState} from "react";
import axios from "axios";
import InputField from "@/components/InputField";
import Checkbox from "@/components/Checkbox";

function Page() {

  const [data, setData] = useState({
    name  : "", 
    email : "",
    phone : "",
    tools : [
      {
        name : "truecaller",
        checked : false
      },
      {
        name : "holehe",
        checked : false
      },
      {
        name : "dehashed",
        checked : false
      },
      {
        name : "dbbreaches",
        checked : false
      }
    ]
    

  })
  const handleCheckboxChange = (event : any) => {
    const { name, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      tools: prevData.tools.map((tool) =>
        tool.name === name ? { ...tool, checked } : tool
      )
    }));
  };
  const handleInputChange = (e:any) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  console.log(data)
  return (
    <div className="container mx-auto mt-8 p-8  ">
      <h1 className="text-4xl font-bold mb-6">Oracle</h1>
      <div className="flex justify-between">
        <div className="flex flex-col p-4  ">
          <h2 className="text-xl font-bold mb-4">Find Actor Tools</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">Name</span>
            <InputField type="text" />
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">Email</span>
            <InputField type="email" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Phone</span>
            <InputField type="text"  />
          </div>
        </div>

        <div className="flex flex-col p-4 ">
          <h2 className="text-xl font-bold mb-4">Fill Actor Info Manually</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">Name</span>
            <InputField type="text" name='name' onChange={ handleInputChange} />
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">Email</span>
            <InputField type="text" name='email' onChange={ handleInputChange} />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Phone</span>
            <InputField type="text" name='phone' onChange={ handleInputChange}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h1 className="text-4xl font-bold mb-6">Tools</h1>
        <div className="mb-2">
          <Checkbox label="TrueCaller" name='truecaller' onChange={handleCheckboxChange}  />
        </div>
        <div className="mb-2">
          <Checkbox label="Holehe" name='holehe' onChange={handleCheckboxChange} />
        </div>
        <div className="mb-2">
          <Checkbox label="Dehashed" name='dehashed' onChange={handleCheckboxChange} />
        </div> 
        <Checkbox label="DB Breaches" name ='dbbreaches' onChange={handleCheckboxChange} />
      </div>
    </div>
  );
}

export default Page;
