"use client";


import { useState } from 'react'
import { Info } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import StarButton from './StarButton';


const Card = ({title, info, img, userName, location}) => {

    const [moreInfo, setMoreInfo] = useState (false)
  return (
    <div>
        
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="pl-5 pr-5 pt-5 rounded-t-lg min-h-56 max-h-80" src={img} alt="" />
    </a>
    <a href="#">
        
            <h5 className="mt-5 ml-5 mb-2 text-xl font-bold tracking-tight text-gray-700">{title}</h5>
            </a>
    <div className="flex">

        {/* col 1 */}
        <div className="pr-5 pl-5 pb-5">
            
            <p className="mb-2 text-sm text-gray-500">{userName}</p>
            <div>
            { moreInfo? <p className="mb-2 font-normal text-sm text-gray-600">{location} - {info}</p>  : <h5></h5>}
            <a onClick={()=> setMoreInfo(!moreInfo)} className="inline-flex items-center px-3 py-2 text-sm font-light text-center text-white bg-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Info />
        
            </a>
            {/* <a className="text-gray-300">
            <Trash2 />
                </a> */}
            </div>
        </div>

        {/* col 2 */}
        <div className="mt-5 mb-auto ml-auto mr-10">
            <StarButton />
        </div>
    </div>
</div>
    </div>
  )
}

export default Card