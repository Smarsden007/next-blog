import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories, getCompany } from '../services';
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
    getCompany().then((newCompany) => {
      setCompany(newCompany)
    })
  }, []);

  
  

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black-400 py-8">
        <div className="block">
          {
            !company.logo && 
            <Link href={``}>
            <span className="cursor-pointer font-bold text-6xl text-white text-yellow-300">Letterway</span>
          </Link>}
          {company.logo && 
            <Link href={`${company.siteLink}`}>
              <img src={company.logo.url} className="h-48"/>
            </Link>
          }
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 mt-6 mr-2 font-semibold text-yellow-300 text-xl cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;