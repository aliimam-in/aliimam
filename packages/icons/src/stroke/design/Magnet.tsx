import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Magnet: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Magnet(
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
          d="M12 15 16 19M2.352 10.648C2.126 10.874 1.999 11.18 1.999 11.5 1.999 11.82 2.126 12.126 2.352 12.352L4.648 14.648C4.874 14.874 5.18 15.001 5.5 15.001 5.819 15.001 6.126 14.874 6.352 14.648L12.381 8.619C12.578 8.422 12.812 8.266 13.069 8.159 13.327 8.053 13.602 7.998 13.881 7.998 14.16 7.998 14.435 8.053 14.693 8.159 14.95 8.266 15.184 8.422 15.381 8.619 15.578 8.816 15.734 9.05 15.841 9.307 15.947 9.565 16.002 9.84 16.002 10.119 16.002 10.398 15.947 10.673 15.841 10.931 15.734 11.188 15.578 11.422 15.381 11.619L9.352 17.648C9.126 17.874 8.999 18.18 8.999 18.5 8.999 18.82 9.126 19.126 9.352 19.352L11.648 21.648C11.874 21.874 12.18 22.001 12.5 22.001 12.82 22.001 13.126 21.874 13.352 21.648L19.717 15.281C21.176 13.822 21.995 11.844 21.995 9.781 21.994 7.718 21.175 5.74 19.716 4.281 18.994 3.559 18.136 2.986 17.192 2.595 16.249 2.204 15.237 2.003 14.216 2.003 12.153 2.003 10.175 2.823 8.716 4.282L2.352 10.648ZM5 8 9 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Magnet.displayName = "Magnet";

Magnet.metadata = {
  name: "Magnet",
  category: "stroke/design",
  tags: ["magnet", "icon"],
  description: "Magnet icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Magnet;
