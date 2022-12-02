import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';



const Author = ( Author ) => {
  console.log("### author ", Author)
  const {unoptimized, photo, name} = Author.author;
  return (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      {photo && <Image
        unoptimized={unoptimized}
        loader={graphCMSImageLoader}
        alt={name}
        height='100'
        width='100'
        className="align-middle rounded-full"
        src={photo.url}
      />}
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{name}</h3>
    <p className="text-white text-ls">{Author.author.bio}</p>
  </div>
  
)};
export default Author;