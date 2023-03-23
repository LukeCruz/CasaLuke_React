import React from 'react';

// import onScroll from '../../actions/scrollMenu';

export default function ButtonFloat() {
  return (

    <a
      href="#homePage"
      className="show"
      id="buttonFloat">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="20"
          cy="20"
          r="20"
          fill="#00856F" />
        <path
          d="M20 27V13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M13 20L20 13L27 20"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </a>

  )
};