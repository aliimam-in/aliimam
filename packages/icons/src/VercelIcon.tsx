import * as React from "react";
import type { IconProps } from "./types.js";

export const VercelIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function VercelIcon({ color = "currentColor", ...props }, forwardedRef) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path d="M7.5 1L15 14H0L7.5 1Z" fill={color} />
      </svg>
    );
  },
);

export default VercelIcon;
