import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';



const Author = ( Author ) => {
  console.log(Author)

  return (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      
      {Author.photo && <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={Author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={Author.photo.url}
      />}
    </div>
    {/* <h3 className="text-white mt-4 mb-4 text-xl font-bold">{Author.name}</h3>
    <p className="text-white text-ls">{Author.bio}</p> */}
  </div>
  
)};
export default Author;