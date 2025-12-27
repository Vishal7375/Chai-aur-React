import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    // console.log("PostCard props:", { $id, title, featuredImage })
    // console.log("featuredImage value:", featuredImage);
    return (
        <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-3'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFileView(featuredImage)} style={{ width: "500px", minHeight: "160px", objectFit: "contain" }} alt={title} className='rounded-xl' 
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
        </Link>
    )
}

export default PostCard
