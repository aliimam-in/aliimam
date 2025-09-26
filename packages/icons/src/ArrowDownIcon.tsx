import * as React from "react";
import type { IconProps } from "../types";

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownIcon({ color = "currentColor", ...props }, forwardedRef) {
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
          d="M11.8535 8.14649C12.0488 8.34175 12.0488 8.65826 11.8535 8.85352L7.85352 12.8535C7.65825 13.0488 7.34175 13.0488 7.14648 12.8535L3.14648 8.85352C2.95122 8.65826 2.95122 8.34175 3.14648 8.14649C3.34175 7.95123 3.65825 7.95123 3.85352 8.14649L7 11.293L7 2.50001C7 2.22387 7.22386 2.00001 7.5 2.00001C7.77614 2.00001 8 2.22387 8 2.50001L8 11.293L11.1465 8.14649C11.3417 7.95123 11.6583 7.95123 11.8535 8.14649Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowDownIcon;
