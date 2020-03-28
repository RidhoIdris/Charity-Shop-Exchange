import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/img/logo_white@2x.png";

export default function Footer() {

  return (
    <div className="bg-new-navy pt-12 sm:pt-20 pb-8">
      <div>
        <div className="flex flex-col items-center sm:flex-row sm:items-start max-w-screen-lg justify-between sm:mx-auto mb-20">
              <div>
              <img className="h-10 md:h-12 mr-12 cursor-pointer mb-12" src={logoWhite} alt="logo" />
              </div>  

              
                  <ul className="flex flex-col items-center sm:inline-block flex-1 sm:flex-none mb-12">
                    
                    <li className="text-xs text-gray-200 mb-4 cursor-pointer">
                      <Link  to="/about">About</Link>
                    </li> 
                    <li className="text-xs text-gray-200 mb-4 cursor-pointer" >
                      <Link to="/Form">Register Your Charity</Link>
                      </li>
                      <li className="text-xs text-gray-200 mb-2 cursor-pointer">
                      <Link  to="/faq">Frequently Ask Questions</Link>
                        </li>
                  </ul>         
              
                <ul className="flex flex-col items-center sm:block flex-1 sm:flex-none">
                  <li className="text-xs text-gray-200 mb-4 cursor-pointer">
                    <Link  to="/about">together@charityshopexchange.com </Link>
                  </li> 
                  <li className="text-xs text-gray-200 mb-2 cursor-pointer">
                    <Link  to="/Form">Twitter @</Link>
                    </li>
                </ul>
              
            </div>
        </div>

        <div className="flex flex-col items-center sm:items-none sm:flex-row max-w-screen-lg mx-auto justify-between text-gray-300 text-xs ">
          © 2020 Charity Shop Exchange
          <span className="text-xs text-gray-200 px-2 cursor-pointer mt-4">
          <Link to="/privacy">Term & Privacy</Link>
          </span>
        </div>  
    </div>
  );
}