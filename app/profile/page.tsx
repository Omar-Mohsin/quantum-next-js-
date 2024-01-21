'use client'
import React from 'react'
import Link from 'next/link'
import UserInformation from './UserInformation'
import { SelectUser  , removeUser} from '@/redux/auth/authSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
function page() {
    const user = useSelector(SelectUser)
    const router = useRouter()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(removeUser(null));
        router.replace("/login");
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    {user ? (
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md md:w-2/3 lg:w-1/2 xl:w-1/3 text-gray-500">
        <h1 className="text-xl md:text-3xl mb-4 text-blue-500 font-semibold">Profile</h1>
        <div className="mb-6">
          <UserInformation />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/profile/rest-password">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
            </Link>
            <Link href="/profile/edit-profile">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit Profile
          </button>
            </Link>
          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Log out
          </button>
        </div>
      </div>
    ) : (
      <div className="text-center">
        <Link href="/login" className="text-blue-500">
          Please login
        </Link>
      </div>
    )}
  </div>
  )
}

export default page