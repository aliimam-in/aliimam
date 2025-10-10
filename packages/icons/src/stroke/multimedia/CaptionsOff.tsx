import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CaptionsOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CaptionsOff(
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
        d="M10.5 5H19C19.53 5 20.039 5.211 20.414 5.586 20.789 5.961 21 6.47 21 7V15.5M17 11H16.5M19 19H5C4.47 19 3.961 18.789 3.586 18.414 3.211 18.039 3 17.53 3 17V7C3 6.47 3.211 5.961 3.586 5.586 3.961 5.211 4.47 5 5 5M2 2 22 22M7 11H11M7 15H9.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CaptionsOff.displayName = "CaptionsOff";

CaptionsOff.metadata = {
  name: "CaptionsOff",
  category: "stroke/multimedia",
  tags: ["captions", "off", "icon"],
  description: "CaptionsOff icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CaptionsOff;
