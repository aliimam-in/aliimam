import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Kayak: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Kayak(
    {
      color = "currentColor",
      fill,
      size = 24,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 17C17.735 17 17.48 17.105 17.293 17.293 17.105 17.48 17 17.735 17 18V19C17 19.396 17.117 19.782 17.337 20.111 17.557 20.44 17.869 20.696 18.235 20.848 18.6 20.999 19.002 21.039 19.39 20.962 19.778 20.884 20.135 20.694 20.414 20.414 20.694 20.135 20.884 19.778 20.962 19.39 21.039 19.002 20.999 18.6 20.848 18.235 20.696 17.869 20.44 17.557 20.111 17.337 19.782 17.117 19.396 17 19 17H18ZM20.97 3.61C21.001 3.529 21.007 3.441 20.989 3.356 20.971 3.272 20.929 3.194 20.867 3.133 20.806 3.072 20.728 3.029 20.644 3.011 20.559 2.993 20.471 2.999 20.39 3.03 10.2 6.6 6.6 10.2 3.03 20.39 2.999 20.471 2.993 20.559 3.011 20.644 3.029 20.728 3.072 20.806 3.133 20.867 3.194 20.929 3.272 20.971 3.356 20.989 3.441 21.007 3.529 21.001 3.61 20.97 13.8 17.4 17.4 13.8 20.97 3.61ZM6.707 6.707 17.293 17.293M7 5C7 4.604 6.883 4.218 6.663 3.889 6.443 3.56 6.131 3.304 5.765 3.152 5.4 3.001 4.998 2.961 4.61 3.038 4.222 3.116 3.865 3.306 3.586 3.586 3.306 3.865 3.116 4.222 3.038 4.61 2.961 4.998 3.001 5.4 3.152 5.765 3.304 6.131 3.56 6.443 3.889 6.663 4.218 6.883 4.604 7 5 7H6C6.265 7 6.52 6.895 6.707 6.707 6.895 6.52 7 6.265 7 6V5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Kayak.displayName = "Kayak";

Kayak.metadata = {
  name: "Kayak",
  category: "stroke/transportation",
  tags: ["kayak", "icon"],
  description: "Kayak icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Kayak;
