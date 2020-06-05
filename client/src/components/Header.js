import React from "react";
import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";
import logo from "../assets/img/cse_logo@2x.png";

export default function Header() {
  return (
    <div className="w-screen py-3 px-8 bg-white border-b-2 z-10 shadow-lg relative">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="h-8 md:h-12" src={logo} alt="logo" />
        </Link>
        {/* <div className="block md:hidden">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.8 0C.806 0 0 .977 0 2.182c0 1.204.806 2.182 1.8 2.182h20.4c.994 0 1.8-.978 1.8-2.182C24 .977 23.194 0 22.2 0H1.8zm0 9.818C.806 9.818 0 10.795 0 12s.806 2.182 1.8 2.182h20.4c.994 0 1.8-.977 1.8-2.182s-.806-2.182-1.8-2.182H1.8zm0 9.818c-.994 0-1.8.978-1.8 2.182C0 23.023.806 24 1.8 24h20.4c.994 0 1.8-.977 1.8-2.182 0-1.204-.806-2.182-1.8-2.182H1.8z"
              fill="#294B75"
              fill-rule="nonzero"
            />
          </svg>
        </div> */}

        <ShareButton />
      </div>
    </div>
  );
}
