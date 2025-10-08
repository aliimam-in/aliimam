import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CombineProps extends IconProps {
  type?: "stroke";
}

export const Combine: IconComponent<CombineProps> = React.forwardRef<
  SVGSVGElement,
  CombineProps
>(function Combine(
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
          d="M14 3C14.265 3 14.52 3.105 14.707 3.293 14.895 3.48 15 3.735 15 4V9C15 9.265 14.895 9.52 14.707 9.707 14.52 9.895 14.265 10 14 10M19 3C19.265 3 19.52 3.105 19.707 3.293 19.895 3.48 20 3.735 20 4V9C20 9.265 19.895 9.52 19.707 9.707 19.52 9.895 19.265 10 19 10M7 15 10 18M7 21 10 18H5C4.47 18 3.961 17.789 3.586 17.414 3.211 17.039 3 16.53 3 16V14M20 14H15C14.448 14 14 14.448 14 15V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14ZM9 3H4C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10H9C9.552 10 10 9.552 10 9V4C10 3.448 9.552 3 9 3Z"
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
          d="M10 18H5C4.204 18 3.441 17.684 2.879 17.121 2.316 16.559 2 15.796 2 15V14M14 2C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V8C16 8.53 15.789 9.039 15.414 9.414 15.039 9.789 14.53 10 14 10M20 2C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 21 10 18 7 15M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM8 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H8C9.105 10 10 9.105 10 8V4C10 2.895 9.105 2 8 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Combine doesn't support ${type}`);
  return null;
});

Combine.displayName = "Combine";

Combine.metadata = {
  name: "Combine",
  category: "stroke/files",
  tags: ["combine", "icon"],
  description: "Combine icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Combine;
