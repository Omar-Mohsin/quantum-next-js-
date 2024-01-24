'use client'
import React , {useEffect , useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { SelectUser } from '@/redux/auth/authSlice';

function page() {
    const user = useSelector(SelectUser);
    useEffect(() => {
          axios
            .get("http://localhost:80/api/v1/workspace", {
              headers: {
                Authorization: `Bearer ${user?.access_token}`,
              },
            })
            .then((res) => {
           
              console.log(res?.data);
            })
            .catch((error) => {
              console.log(error?.response.data);
            });
      }, []);
    

  return (
    <div>page</div>
  )
}

export default page