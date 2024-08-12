import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#D63C41"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <Path
      stroke="#D63C41"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 9.25H10v5.25h.75"
    />
    <Path
      fill="#D63C41"
      d="M10 7a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 10 7Z"
    />
  </Svg>
);
export default SvgComponent;
