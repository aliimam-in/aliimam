import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PictureInPicture: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PictureInPicture(
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
        d="M2 10H8V4M2 4 8 10M21 10V7C21 6.47 20.789 5.961 20.414 5.586 20.039 5.211 19.53 5 19 5H12M3 14V16C3 16.53 3.211 17.039 3.586 17.414 3.961 17.789 4.47 18 5 18H8M21 14H13C12.448 14 12 14.448 12 15V20C12 20.552 12.448 21 13 21H21C21.552 21 22 20.552 22 20V15C22 14.448 21.552 14 21 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PictureInPicture.displayName = "PictureInPicture";

PictureInPicture.metadata = {
  name: "PictureInPicture",
  category: "stroke/multimedia",
  tags: ["picture", "in", "icon"],
  description: "PictureInPicture icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PictureInPicture;
