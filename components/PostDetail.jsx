import React from 'react';

import moment from 'moment';

import { getPostDetails } from '../services';
import Link from 'next/link';


const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type, parent) => {
    let modifiedText = text;
    let shouldReturn = false
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
        shouldReturn = true
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
        shouldReturn = true
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
        shouldReturn = true
      }
    }
    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case 'list-item':
        return (
        <>
          <ul>
            <li className='ml-4'><b className='ml-[-15px]'>• </b>
              {obj.children[0].children.map((item, index) => {
                let className = '';
                if(index === 0) {
                }
                let text = item.text
                if(item.bold) {
                  text = <b>{text}</b>
                }
                if(obj.italic){
                  text = <em key={item.index}>{text}</em>
                }
                if(obj.undefined) {
                  text = <u>{text}</u>
                }
                return <span>{text}</span>
                
              })}
            </li>
          </ul>
        </>
        )
      case 'link':
        return <a className="hover:cursor-pointer hover:underline font-medium text-blue-800 text-underline" href={obj.href}>{obj.children[0].text}</a>
      case undefined:
        if(obj.text===''){
          return <><br/><br/></>
        }
       default:
        return (<>{modifiedText}</>);
    }
  };
  return (
    <>
      {post && <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              {post.author?.photo && <img
                alt={post.author?.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />}
              {/* <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.name}</p> */}
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author?.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
            {post.content.raw.children.map((typeObj, index) => {    
              if(typeObj.src) {
                return <>
                  {getContentFragment(index,typeObj.text, typeObj, typeObj.type)}
                </>
              }
              return <>
                {
                  typeObj.children.map((child, idx)=>{
                    return <>{getContentFragment(idx, child.text, child, child.type)}</>           
                })
                }
                  {typeObj.type!== 'bulleted-list' && <><br/><br/></>}
                  {typeObj.type == 'bulleted-list' && <><br/></>}
              </>
          })}
        </div>
      </div>}

    </>
  );
};

export default PostDetail;