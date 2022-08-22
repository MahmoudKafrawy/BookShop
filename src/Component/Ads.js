import React from "react";
import { Link } from "react-router-dom";
import adsImg from "../images/ads_1.png";

const Ads = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ads-card">
      <div>
        <span className="block  text-5xl ads_title">Build your library</span>
        <span className="block my-4 text-xl my-4 ads_subtitle">Buy 2 and get 1 for free !</span>
        <Link to="/all/1">
          <div>
            <button
              type="button"
              class="text-white button_color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View all
            </button>
          </div>
        </Link>
      </div>
      <div>
        <img src={adsImg} />
      </div>
    </div>
  );
};

export default Ads;
