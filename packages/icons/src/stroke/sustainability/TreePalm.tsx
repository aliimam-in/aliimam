import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TreePalmProps extends IconProps {
  type?: "stroke";
}

export const TreePalm: IconComponent<TreePalmProps> = React.forwardRef<
  SVGSVGElement,
  TreePalmProps
>(function TreePalm(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M13 8C13 5.24 10.54 3 7.5 3 4.46 3 2 5.24 2 8H4L5 7 6 8H10M13 7.14C14.013 6.391 15.241 5.991 16.5 6 19.54 6 22 8.24 22 11H19L18 10 17 11H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.89009 9.71C3.74009 11.86 3.59009 15.18 5.54009 17.14L9.78009 12.89L10.4801 12.19L11.1901 11.48L13.3101 9.36C11.3601 7.4 8.04009 7.56 5.89009 9.71Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 15.5C11.5 18 10.83 20 10 22H14C16 16.5 13.5 10 13 8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M13 8C13 5.24 10.54 3 7.5 3 4.46 3 2 5.24 2 8H4L5 7 6 8H10M13 7.14C14.013 6.391 15.241 5.991 16.5 6 19.54 6 22 8.24 22 11H19L18 10 17 11H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.89009 9.71C3.74009 11.86 3.59009 15.18 5.54009 17.14L9.78009 12.89L10.4801 12.19L11.1901 11.48L13.3101 9.36C11.3601 7.4 8.04009 7.56 5.89009 9.71Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 15.5C11.5 18 10.83 20 10 22H14C16 16.5 13.5 10 13 8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`TreePalm doesn't support ${type}`);
  return null;
});

TreePalm.displayName = "TreePalm";

TreePalm.metadata = {
  name: "TreePalm",
  category: "stroke/sustainability",
  tags: ["tree", "palm", "icon"],
  description: "TreePalm icon from stroke/sustainability category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TreePalm;
