import React , {useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'
import ShowWorkspaces from '@/components/Workspace/ShowWorkspaces'
import Collaborateres from '@/components/Workspace/Collaborateres'


function page() {
/*
  useEffect(() => {
    axios.get('#').then((res) => {
      console.log(res.data)
    })
  }, [])
  */


  const data   =  [
    {
    id : 1, 
    name  : 'boxer workspace' , 
    created_at : '2021-10-10' ,
    created_by : 'boxer' ,
    owner : 'boxer' ,
    }, 
    {
      id : 2, 
      name  : 'omar workspace' , 
      created_at : '2021-10-10' ,
      created_by : 'omar' ,
      owner : 'omar' ,
    }, 
    {
      id : 2, 
      name  : 'empty workspace' , 
      created_at : '2021-10-10' ,
      created_by : 'empty' ,
      owner : 'empty' ,
    }


  ]

  const collabData = [
    {
      id : 1 , 
      name : 'boxer' , 
      status : 'pending'
    } , 
     {
      id : 2 , 
      name : 'omar' , 
      status : 'accepted'
     }
  ]
  return (
    <div>
      
        <ShowWorkspaces workspaces={data} />
        <Collaborateres collab={collabData} />

    </div>
  )
}

export default page