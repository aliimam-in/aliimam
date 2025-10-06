import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Download: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Download(
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
        d="M12 15V3M21 15V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Download.displayName = "Download";

Download.metadata = {
  name: "Download",
  category: "stroke/arrows",
  tags: ["download", "icon"],
  description: "Download icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Download;
