import * as React from "react";
import type { IconProps } from "./types";

export const ArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeft({ color = "currentColor", ...props }, forwardedRef) {
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
        <path
          d="M6.14648 3.14648C6.34175 2.95122 6.65825 2.95122 6.85352 3.14648C7.04878 3.34175 7.04878 3.65825 6.85352 3.85352L3.70703 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70703L6.85352 11.1465C7.04878 11.3417 7.04878 11.6583 6.85352 11.8535C6.65825 12.0488 6.34175 12.0488 6.14648 11.8535L2.14648 7.85352C1.95122 7.65825 1.95122 7.34175 2.14648 7.14648L6.14648 3.14648Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowLeft;
