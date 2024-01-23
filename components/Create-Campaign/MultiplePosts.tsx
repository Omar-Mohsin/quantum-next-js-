import React from "react";
import Checkbox from "@/components/Checkbox";

function MultiplePosts({ addDictionary }: any) {
  return (
    <div className="ml-16">
      target
      <div className="flex ml-16">
        IN :
        <div className="flex flex-col ml-4">
          <textarea
            className="w-full p-2 border border-gray-300"
            rows={7}
            cols={27}
            style={{ resize: "none" }}
          />

          <button className="bg-blue-500 mt-12 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Dictionary
          </button>
          <div className="mt-4">
            <Checkbox label="include Related keywords" />
          </div>
        </div>
        <div className="ml-5"></div>
        NOT :
        <div className="flex flex-col  ml-4">
          <textarea
            className="w-full p-2 border border-gray-300"
            rows={7}
            cols={27}
            style={{ resize: "none" }}
          />

          <button className="bg-blue-500 mt-12 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Dictionary
          </button>
          <div className="mt-4">
            <Checkbox label="include Related keywords" />
          </div>
        </div>
        <div className="ml-5"></div>
        OR :
        <div className="flex flex-col  ml-4">
          <textarea
            className="w-full p-2 border border-gray-300"
            rows={7}
            cols={27}
            style={{ resize: "none" }}
          />

          <button className="bg-blue-500 mt-12 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Dictionary
          </button>
          <div className="mt-4">
            <Checkbox label="include Related keywords" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiplePosts;
