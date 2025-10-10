import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SailboatProps extends IconProps {
  type?: "stroke";
}

export const Sailboat: IconComponent<SailboatProps> = React.forwardRef<
  SVGSVGElement,
  SailboatProps
>(function Sailboat(
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
          d="M10 2V17M7 22C5.939 22 4.922 21.579 4.172 20.828 3.421 20.078 3 19.061 3 18 3 17.735 3.105 17.48 3.293 17.293 3.48 17.105 3.735 17 4 17H20C20.265 17 20.52 17.105 20.707 17.293 20.895 17.48 21 17.735 21 18 21 19.061 20.579 20.078 19.828 20.828 19.078 21.579 18.061 22 17 22H7ZM9.159 2.46C9.238 2.337 9.343 2.233 9.466 2.155 9.59 2.077 9.729 2.027 9.874 2.009 10.019 1.99 10.167 2.004 10.306 2.048 10.445 2.093 10.573 2.168 10.68 2.267L20.657 11.247C20.81 11.381 20.919 11.558 20.968 11.756 21.018 11.953 21.007 12.161 20.935 12.351 20.864 12.542 20.736 12.706 20.569 12.822 20.402 12.938 20.203 13 20 13H4C3.818 13 3.639 12.95 3.483 12.856 3.327 12.762 3.199 12.627 3.114 12.466 3.03 12.304 2.99 12.123 3.001 11.941 3.012 11.759 3.072 11.583 3.176 11.433L9.159 2.46Z"
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
          d="M10 2V17M7 22C5.939 22 4.922 21.579 4.172 20.828 3.421 20.078 3 19.061 3 18 3 17.735 3.105 17.48 3.293 17.293 3.48 17.105 3.735 17 4 17H20C20.265 17 20.52 17.105 20.707 17.293 20.895 17.48 21 17.735 21 18 21 19.061 20.579 20.078 19.828 20.828 19.078 21.579 18.061 22 17 22H7ZM9.159 2.46C9.238 2.337 9.343 2.233 9.466 2.155 9.59 2.077 9.729 2.027 9.874 2.009 10.019 1.99 10.167 2.004 10.306 2.048 10.445 2.093 10.573 2.168 10.68 2.267L20.657 11.247C20.81 11.381 20.919 11.558 20.968 11.756 21.018 11.953 21.007 12.161 20.935 12.351 20.864 12.542 20.736 12.706 20.569 12.822 20.402 12.938 20.203 13 20 13H4C3.818 13 3.639 12.95 3.483 12.856 3.327 12.762 3.199 12.627 3.114 12.466 3.03 12.304 2.99 12.123 3.001 11.941 3.012 11.759 3.072 11.583 3.176 11.433L9.159 2.46Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Sailboat doesn't support ${type}`);
  return null;
});

Sailboat.displayName = "Sailboat";

Sailboat.metadata = {
  name: "Sailboat",
  category: "stroke/transportation",
  tags: ["sailboat", "icon"],
  description: "Sailboat icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sailboat;
