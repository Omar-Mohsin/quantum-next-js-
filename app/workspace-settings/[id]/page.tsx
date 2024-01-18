import React , {useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'
import ShowWorkspaces from '@/components/Workspace/ShowWorkspaces'
import Collaborateres from '@/components/Workspace/Collaborateres'

function page({params}  :any) {

  console.log(params.id)
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
     },
     {
      id : 3 , 
      name : 'omar' , 
      status : 'accepted'
     },
  ]
  return (
    <div className='mt-7'>
      
        <ShowWorkspaces workspaces={data} />
        <Collaborateres collab={collabData} />

    </div>
  )
}

export default page