import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VectorSquareProps extends IconProps {
  type?: "stroke";
}

export const VectorSquare: IconComponent<VectorSquareProps> = React.forwardRef<
  SVGSVGElement,
  VectorSquareProps
>(function VectorSquare(
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
          d="M19.5 7C20.202 10.296 20.202 13.704 19.5 17M4.5 7C3.798 10.296 3.798 13.704 4.5 17M7 19.5C10.296 20.202 13.704 20.202 17 19.5M7 4.5C10.296 3.798 13.704 3.798 17 4.5M21 17H18C17.448 17 17 17.448 17 18V21C17 21.552 17.448 22 18 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM21 2H18C17.448 2 17 2.448 17 3V6C17 6.552 17.448 7 18 7H21C21.552 7 22 6.552 22 6V3C22 2.448 21.552 2 21 2ZM6 17H3C2.448 17 2 17.448 2 18V21C2 21.552 2.448 22 3 22H6C6.552 22 7 21.552 7 21V18C7 17.448 6.552 17 6 17ZM6 2H3C2.448 2 2 2.448 2 3V6C2 6.552 2.448 7 3 7H6C6.552 7 7 6.552 7 6V3C7 2.448 6.552 2 6 2Z"
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
          d="M19.5 7C20.202 10.296 20.202 13.704 19.5 17M4.5 7C3.798 10.296 3.798 13.704 4.5 17M7 19.5C10.296 20.202 13.704 20.202 17 19.5M7 4.5C10.296 3.798 13.704 3.798 17 4.5M21 17H18C17.448 17 17 17.448 17 18V21C17 21.552 17.448 22 18 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM21 2H18C17.448 2 17 2.448 17 3V6C17 6.552 17.448 7 18 7H21C21.552 7 22 6.552 22 6V3C22 2.448 21.552 2 21 2ZM6 17H3C2.448 17 2 17.448 2 18V21C2 21.552 2.448 22 3 22H6C6.552 22 7 21.552 7 21V18C7 17.448 6.552 17 6 17ZM6 2H3C2.448 2 2 2.448 2 3V6C2 6.552 2.448 7 3 7H6C6.552 7 7 6.552 7 6V3C7 2.448 6.552 2 6 2Z"
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
          d="M19.5 7C20.202 10.296 20.202 13.704 19.5 17M4.5 7C3.798 10.296 3.798 13.704 4.5 17M7 19.5C10.296 20.202 13.704 20.202 17 19.5M7 4.5C10.296 3.798 13.704 3.798 17 4.5M21 17H18C17.448 17 17 17.448 17 18V21C17 21.552 17.448 22 18 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM21 2H18C17.448 2 17 2.448 17 3V6C17 6.552 17.448 7 18 7H21C21.552 7 22 6.552 22 6V3C22 2.448 21.552 2 21 2ZM6 17H3C2.448 17 2 17.448 2 18V21C2 21.552 2.448 22 3 22H6C6.552 22 7 21.552 7 21V18C7 17.448 6.552 17 6 17ZM6 2H3C2.448 2 2 2.448 2 3V6C2 6.552 2.448 7 3 7H6C6.552 7 7 6.552 7 6V3C7 2.448 6.552 2 6 2Z"
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
          d="M19.5 7C20.202 10.296 20.202 13.704 19.5 17M4.5 7C3.798 10.296 3.798 13.704 4.5 17M7 19.5C10.296 20.202 13.704 20.202 17 19.5M7 4.5C10.296 3.798 13.704 3.798 17 4.5M21 17H18C17.448 17 17 17.448 17 18V21C17 21.552 17.448 22 18 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM21 2H18C17.448 2 17 2.448 17 3V6C17 6.552 17.448 7 18 7H21C21.552 7 22 6.552 22 6V3C22 2.448 21.552 2 21 2ZM6 17H3C2.448 17 2 17.448 2 18V21C2 21.552 2.448 22 3 22H6C6.552 22 7 21.552 7 21V18C7 17.448 6.552 17 6 17ZM6 2H3C2.448 2 2 2.448 2 3V6C2 6.552 2.448 7 3 7H6C6.552 7 7 6.552 7 6V3C7 2.448 6.552 2 6 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`VectorSquare doesn't support ${type}`);
  return null;
});

VectorSquare.displayName = "VectorSquare";

VectorSquare.metadata = {
  name: "VectorSquare",
  category: "stroke/shapes",
  tags: ["vector", "square", "icon"],
  description: "VectorSquare icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VectorSquare;
