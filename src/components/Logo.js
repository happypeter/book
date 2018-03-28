import React from "react";

const Logo = props => (
  <svg width={100} height={100} viewBox="0 0 100 100" {...props}>
    <title>logo-main</title>
    <g fill={props.fill} fillRule="nonzero">
      <ellipse cx={50} cy={62.786} rx={50} ry={37.786} />
      <path d="M.782 0C23.23 0 34.297 20.234 45.73 28.333 36.416 36.776 26.273 37.5 7.814 44.096 2.812 29.402-1.908 11.093.782 0zM99.95 0C77.5 0 66.433 20.234 55 28.333c9.315 8.443 19.458 9.167 37.917 15.763C97.918 29.402 102.639 11.093 99.949 0z" />
    </g>
  </svg>
);

export default Logo;

