import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ClipboardX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ClipboardX(
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
        d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4H18C18.53 4 19.039 4.211 19.414 4.586 19.789 4.961 20 5.47 20 6V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V6C4 5.47 4.211 4.961 4.586 4.586 4.961 4.211 5.47 4 6 4H8M15 11 9 17M9 11 15 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClipboardX.displayName = "ClipboardX";

ClipboardX.metadata = {
  name: "ClipboardX",
  category: "stroke/textFormatting",
  tags: ["clipboard", "icon"],
  description: "ClipboardX icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClipboardX;
