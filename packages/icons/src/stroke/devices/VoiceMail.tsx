import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const VoiceMail: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function VoiceMail(
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
        d="M6 16C8.209 16 10 14.209 10 12 10 9.791 8.209 8 6 8 3.791 8 2 9.791 2 12 2 14.209 3.791 16 6 16ZM18 16C20.209 16 22 14.209 22 12 22 9.791 20.209 8 18 8 15.791 8 14 9.791 14 12 14 14.209 15.791 16 18 16ZM6 16H18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

VoiceMail.displayName = "VoiceMail";

VoiceMail.metadata = {
  name: "VoiceMail",
  category: "stroke/devices",
  tags: ["voice", "mail", "icon"],
  description: "VoiceMail icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VoiceMail;
