import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PaintRollerProps extends IconProps {
  type?: "stroke";
}

export const PaintRoller: IconComponent<PaintRollerProps> = React.forwardRef<
  SVGSVGElement,
  PaintRollerProps
>(function PaintRoller(
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
          d="M16 2H4C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H16C17.1046 8 18 7.10457 18 6V4C18 2.89543 17.1046 2 16 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16V14C10 13.47 10.211 12.961 10.586 12.586 10.961 12.211 11.47 12 12 12H20C20.53 12 21.039 11.789 21.414 11.414 21.789 11.039 22 10.53 22 10V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H18M11 16H9C8.448 16 8 16.448 8 17V21C8 21.552 8.448 22 9 22H11C11.552 22 12 21.552 12 21V17C12 16.448 11.552 16 11 16Z"
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
          d="M16 2H4C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H16C17.1046 8 18 7.10457 18 6V4C18 2.89543 17.1046 2 16 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16V14C10 13.47 10.211 12.961 10.586 12.586 10.961 12.211 11.47 12 12 12H20C20.53 12 21.039 11.789 21.414 11.414 21.789 11.039 22 10.53 22 10V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H18M11 16H9C8.448 16 8 16.448 8 17V21C8 21.552 8.448 22 9 22H11C11.552 22 12 21.552 12 21V17C12 16.448 11.552 16 11 16Z"
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
          d="M16 2H4C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H16C17.1046 8 18 7.10457 18 6V4C18 2.89543 17.1046 2 16 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16V14C10 13.47 10.211 12.961 10.586 12.586 10.961 12.211 11.47 12 12 12H20C20.53 12 21.039 11.789 21.414 11.414 21.789 11.039 22 10.53 22 10V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H18M11 16H9C8.448 16 8 16.448 8 17V21C8 21.552 8.448 22 9 22H11C11.552 22 12 21.552 12 21V17C12 16.448 11.552 16 11 16Z"
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
          d="M16 2H4C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H16C17.1046 8 18 7.10457 18 6V4C18 2.89543 17.1046 2 16 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16V14C10 13.47 10.211 12.961 10.586 12.586 10.961 12.211 11.47 12 12 12H20C20.53 12 21.039 11.789 21.414 11.414 21.789 11.039 22 10.53 22 10V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H18M11 16H9C8.448 16 8 16.448 8 17V21C8 21.552 8.448 22 9 22H11C11.552 22 12 21.552 12 21V17C12 16.448 11.552 16 11 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PaintRoller doesn't support ${type}`);
  return null;
});

PaintRoller.displayName = "PaintRoller";

PaintRoller.metadata = {
  name: "PaintRoller",
  category: "stroke/tools",
  tags: ["paint", "roller", "icon"],
  description: "PaintRoller icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PaintRoller;
