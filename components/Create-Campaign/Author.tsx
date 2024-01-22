import React from 'react'
import InputField from '@/components/InputField';
import Checkbox from '@/components/Checkbox';
function Author() {
  return (
    <div className="ml-20">
    <div className="flex items-center ">
      <div className="mr-4 text-lg text-gray-600">Auther URL/handler</div>

      {/*make this a flex col*/}
      <InputField
        type="text"
        placeholder="Campaign Name"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
      Add Dictionary
    </button>
    <div className ='mt-4'>
    <Checkbox label="include Related keywords" />
    </div>
  </div>
  )
}

export default Author