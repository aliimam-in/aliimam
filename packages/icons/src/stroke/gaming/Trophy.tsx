import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Trophy: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Trophy(
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
          d="M10 14.66V16.286C9.996 16.629 9.904 16.965 9.734 17.262 9.563 17.559 9.318 17.807 9.024 17.982 8.399 18.445 7.891 19.047 7.539 19.741 7.188 20.434 7.003 21.2 7 21.978M14 14.66V16.286C14.004 16.629 14.096 16.965 14.266 17.262 14.437 17.559 14.682 17.807 14.976 17.982 15.601 18.445 16.109 19.047 16.461 19.741 16.812 20.434 16.997 21.2 17 21.978M18 9H19.5C20.163 9 20.799 8.737 21.268 8.268 21.737 7.799 22 7.163 22 6.5 22 5.837 21.737 5.201 21.268 4.732 20.799 4.263 20.163 4 19.5 4H18M4 22H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9C6 10.591 6.632 12.117 7.757 13.243 8.883 14.368 10.409 15 12 15 13.591 15 15.117 14.368 16.243 13.243 17.368 12.117 18 10.591 18 9V3C18 2.735 17.895 2.48 17.707 2.293 17.52 2.105 17.265 2 17 2H7C6.735 2 6.48 2.105 6.293 2.293 6.105 2.48 6 2.735 6 3V9ZM6 9H4.5C3.837 9 3.201 8.737 2.732 8.268 2.263 7.799 2 7.163 2 6.5 2 5.837 2.263 5.201 2.732 4.732 3.201 4.263 3.837 4 4.5 4H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Trophy.displayName = "Trophy";

Trophy.metadata = {
  name: "Trophy",
  category: "stroke/gaming",
  tags: ["trophy", "icon"],
  description: "Trophy icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Trophy;
