import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={12} height={14} viewBox="0 0 12 14" {...props}>
      <Path fill="#fff" d="M0 0h12v2H0V0zm0 6h10v2H0V6zm0 6h8v2H0v-2z" />
    </Svg>
  )
}

export default SvgComponent