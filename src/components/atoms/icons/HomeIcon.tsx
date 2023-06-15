import React from "react";
import { Path, Svg } from "react-native-svg";
import { SvgProps } from ".";

const HomeIcon = ({ color, size }: SvgProps) => {
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill={color}
    >
      <Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 22V12H15V22"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
