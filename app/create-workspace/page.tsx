'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SelectUser, SelectUserDetails } from '@/redux/auth/authSlice';
import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField';

function Page() {
  const router = useRouter();
  const user = useSelector(SelectUser);
  const userDetails = useSelector(SelectUserDetails);
  const [workspaceName, setWorkspaceName] = useState('');

  const onChangeName = (event : any) => {
    setWorkspaceName(event.target.value);
  };

  const createWorkspace = () => {
    if (workspaceName === '') {
      return alert('Please enter workspace name');
    }

    const data = {
      workspace_name: workspaceName,
      campaigns: [],
      collaborators: [],
    };

    axios
      .post('http://localhost:80/api/v1/workspace', data, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
      })
      .then((response) => {
        router.push('/');
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='text-2xl text-blue-500'>Welcome {userDetails.full_name}</h1>
      <h2 className='text-2xl text-blue-500 mt-1 mb-4'>Create your first Workspace</h2>
      <InputField placeholder='Enter workspace name' onChange={onChangeName} />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={createWorkspace}
      >
        Create
      </button>
    </div>
  );
}

// Export the component
export default Page;
