import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PictureInPicture2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PictureInPicture2(
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
        d="M21 9V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V16C2 17.1 2.9 18 4 18H8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13H14C12.8954 13 12 13.8954 12 15V18C12 19.1046 12.8954 20 14 20H20C21.1046 20 22 19.1046 22 18V15C22 13.8954 21.1046 13 20 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PictureInPicture2.displayName = "PictureInPicture2";

PictureInPicture2.metadata = {
  name: "PictureInPicture2",
  category: "stroke/multimedia",
  tags: ["picture", "in", "icon"],
  description: "PictureInPicture2 icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PictureInPicture2;
