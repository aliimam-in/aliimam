import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sticker: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Sticker(
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
        d="M15.5 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 20.1 3.9 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8.5L15.5 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3V7C14 7.53 14.211 8.039 14.586 8.414 14.961 8.789 15.47 9 16 9H20M8 13H8.01M16 13H16.01M10 16C10 16 10.8 17 12 17 13.3 17 14 16 14 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Sticker.displayName = "Sticker";

Sticker.metadata = {
  name: "Sticker",
  category: "stroke/social",
  tags: ["sticker", "icon"],
  description: "Sticker icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sticker;
