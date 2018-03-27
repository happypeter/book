import React from "react";


const Logo = props => (
  <svg width={55} height={41} viewBox="0 0 55 41" {...props}>
    <title>logo-main</title>
    <g fill="none" fillRule="evenodd">
      <path d="M-35-29h1199.006V71H-35z" fill={props.fill} />
      <g fill={props.BgFill} fillRule="nonzero">
        <ellipse cx={27.477} cy={22.5} rx={24.48} ry={18.5} />
        <path d="M54.717 0C49.224 0 37.97 7.394 37.97 7.394L50.418 18s5.76-13.293 4.3-18zM.237 0C5.73 0 16.986 7.394 16.986 7.394L4.536 18S-1.222 4.707.238 0z" />
      </g>
    </g>
  </svg>
);

export default Logo;

