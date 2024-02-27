import * as React from "react"
const Eye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M1.21 10s4.6-6.667 12.653-6.667C21.915 3.333 26.516 10 26.516 10s-4.6 6.667-12.653 6.667C5.81 16.667 1.209 10 1.209 10Z" />
      <path d="M13.863 12.5c1.906 0 3.45-1.12 3.45-2.5s-1.544-2.5-3.45-2.5c-1.906 0-3.451 1.12-3.451 2.5s1.545 2.5 3.45 2.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.059 0h27.608v20H.059z" />
      </clipPath>
    </defs>
  </svg>
)
export default Eye
