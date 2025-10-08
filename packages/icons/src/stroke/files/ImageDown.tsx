import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ImageDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ImageDown(
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
        d="M10.3 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15L17.9 11.9C17.5237 11.5312 17.017 11.3258 16.4901 11.3284C15.9632 11.331 15.4586 11.5415 15.086 11.914L6 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19 17 22V16.5M17 22 20 19M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ImageDown.displayName = "ImageDown";

ImageDown.metadata = {
  name: "ImageDown",
  category: "stroke/files",
  tags: ["image", "down", "icon"],
  description: "ImageDown icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ImageDown;
