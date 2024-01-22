import React from "react";
import Link from "next/link";
import Checkbox from "../Checkbox";
function Actor() {
  return (
    <div className="ml-20 flex flex-col h-full">
      <h1 className="text-xl ">Actors</h1>
      <div className="mt-4">
        <Checkbox label="Actor 1" />
      </div>
      <div className="mt-2">
        <Checkbox label="Actor 2" />
      </div>
      <Link href={"/oracle"}>
        <button className="bg-green-500 mt-4 hover:bg-green-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">
          Create Actor
        </button>
      </Link>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Dictionary
        </button>
      </div>
      <Checkbox label="include Related keywords" />
    </div>
  );
}

export default Actor;
