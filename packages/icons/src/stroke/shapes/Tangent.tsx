import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TangentProps extends IconProps {
  type?: "stroke";
}

export const Tangent: IconComponent<TangentProps> = React.forwardRef<
  SVGSVGElement,
  TangentProps
>(function Tangent(
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
          d="M17 6C18.105 6 19 5.105 19 4 19 2.895 18.105 2 17 2 15.895 2 15 2.895 15 4 15 5.105 15.895 6 17 6ZM15.59 5.41 5.41 15.59M4 19C5.105 19 6 18.105 6 17 6 15.895 5.105 15 4 15 2.895 15 2 15.895 2 17 2 18.105 2.895 19 4 19ZM12 22C12 22 8 13 10.5 10.5 13 8 22 12 22 12"
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
          d="M17 6C18.105 6 19 5.105 19 4 19 2.895 18.105 2 17 2 15.895 2 15 2.895 15 4 15 5.105 15.895 6 17 6ZM15.59 5.41 5.41 15.59M4 19C5.105 19 6 18.105 6 17 6 15.895 5.105 15 4 15 2.895 15 2 15.895 2 17 2 18.105 2.895 19 4 19ZM12 22C12 22 8 13 10.5 10.5 13 8 22 12 22 12"
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
          d="M17 6C18.105 6 19 5.105 19 4 19 2.895 18.105 2 17 2 15.895 2 15 2.895 15 4 15 5.105 15.895 6 17 6ZM15.59 5.41 5.41 15.59M4 19C5.105 19 6 18.105 6 17 6 15.895 5.105 15 4 15 2.895 15 2 15.895 2 17 2 18.105 2.895 19 4 19ZM12 22C12 22 8 13 10.5 10.5 13 8 22 12 22 12"
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
          d="M17 6C18.105 6 19 5.105 19 4 19 2.895 18.105 2 17 2 15.895 2 15 2.895 15 4 15 5.105 15.895 6 17 6ZM15.59 5.41 5.41 15.59M4 19C5.105 19 6 18.105 6 17 6 15.895 5.105 15 4 15 2.895 15 2 15.895 2 17 2 18.105 2.895 19 4 19ZM12 22C12 22 8 13 10.5 10.5 13 8 22 12 22 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tangent doesn't support ${type}`);
  return null;
});

Tangent.displayName = "Tangent";

Tangent.metadata = {
  name: "Tangent",
  category: "stroke/shapes",
  tags: ["tangent", "icon"],
  description: "Tangent icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tangent;
