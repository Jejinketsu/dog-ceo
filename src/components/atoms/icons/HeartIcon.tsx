import React from "react";
import { Path, Svg, G } from "react-native-svg";
import { SvgProps } from ".";

const Hearth = ({ size, color }: SvgProps) => {
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
      viewBox="0 0 24 24"
    >
      <Path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
    </Svg>
  );
};

export default Hearth;
