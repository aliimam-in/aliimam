import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract05: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract05(
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
        d="M12 0.346668C9.82476 0.346668 8.06094 5.56381 8.06094 12C8.06094 18.4362 9.82476 23.6533 12 23.6533C14.1752 23.6533 15.9391 18.4362 15.9391 12C15.9391 5.56381 14.1752 0.346668 12 0.346668ZM7.94475 24V0H16.0572V24H7.94475ZM12 8.17714C5.56381 8.17714 0.346656 9.94095 0.346656 12.1162C0.346656 14.2914 5.56381 16.0552 12 16.0552C18.4362 16.0552 23.6533 14.2914 23.6533 12.1162C23.6533 9.94095 18.4362 8.17714 12 8.17714ZM0 16.1733V8.06095H24V16.1733H0Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract05.displayName = "Abstract05";

Abstract05.metadata = {
  name: "Abstract05",
  category: "shapes/abstract",
  tags: ["abstract", "05", "icon"],
  description: "Abstract05 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract05;
