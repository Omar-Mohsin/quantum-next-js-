import React from "react";
import axios from "axios";
import InputField from "@/components/InputField";
import Checkbox from "@/components/Checkbox";

function Page() {
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
            <InputField type="text" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Phone</span>
            <InputField type="text" />
          </div>
        </div>

        <div className="flex flex-col p-4 ">
          <h2 className="text-xl font-bold mb-4">Fill Actor Info Manually</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">Name</span>
            <InputField type="text" />
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">Email</span>
            <InputField type="text" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Phone</span>
            <InputField type="text" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h1 className="text-4xl font-bold mb-6">Tools</h1>
        <div className="mb-2">
          <Checkbox label="TrueCaller" />
        </div>
        <div className="mb-2">
          <Checkbox label="Holehe" />
        </div>
        <div className="mb-2">
          <Checkbox label="Dehashed" />
        </div> 
        <Checkbox label="DB Breaches" />
      </div>
    </div>
  );
}

export default Page;
