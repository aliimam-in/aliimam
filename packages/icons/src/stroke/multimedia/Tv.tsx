import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TvProps extends IconProps {
  type?: "stroke";
}

export const Tv: IconComponent<TvProps> = React.forwardRef<
  SVGSVGElement,
  TvProps
>(function Tv(
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
          d="M17 2 12 7 7 2M20 7H4C2.895 7 2 7.895 2 9V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V9C22 7.895 21.105 7 20 7Z"
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
          d="M17 2 12 7 7 2M20 7H4C2.895 7 2 7.895 2 9V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V9C22 7.895 21.105 7 20 7Z"
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
          d="M17 2 12 7 7 2M20 7H4C2.895 7 2 7.895 2 9V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V9C22 7.895 21.105 7 20 7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tv doesn't support ${type}`);
  return null;
});

Tv.displayName = "Tv";

Tv.metadata = {
  name: "Tv",
  category: "stroke/multimedia",
  tags: ["tv", "icon"],
  description: "Tv icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tv;
