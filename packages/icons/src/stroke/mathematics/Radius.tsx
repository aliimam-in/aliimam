import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RadiusProps extends IconProps {
  type?: "stroke";
}

export const Radius: IconComponent<RadiusProps> = React.forwardRef<
  SVGSVGElement,
  RadiusProps
>(function Radius(
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
          d="M20.34 17.52C21.708 15.453 22.2596 12.9516 21.8879 10.501C21.5161 8.05035 20.2474 5.82512 18.3279 4.25688C16.4084 2.68864 13.9749 1.88917 11.4993 2.01352C9.02376 2.13786 6.68261 3.17717 4.92992 4.92986C3.17723 6.68255 2.13792 9.0237 2.01358 11.4993C1.88923 13.9748 2.6887 16.4083 4.25694 18.3278C5.82518 20.2473 8.05041 21.516 10.501 21.8878C12.9517 22.2596 15.4531 21.708 17.52 20.34"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 21C20.105 21 21 20.105 21 19 21 17.895 20.105 17 19 17 17.895 17 17 17.895 17 19 17 20.105 17.895 21 19 21ZM13.41 13.41 17.59 17.59M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
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
          d="M20.34 17.52C21.708 15.4531 22.2596 12.9517 21.8879 10.501C21.5161 8.05041 20.2474 5.82518 18.3279 4.25694C16.4084 2.6887 13.9749 1.88923 11.4993 2.01358C9.02376 2.13792 6.68261 3.17723 4.92992 4.92992C3.17723 6.68261 2.13792 9.02376 2.01358 11.4993C1.88923 13.9749 2.6887 16.4084 4.25694 18.3279C5.82518 20.2474 8.05041 21.5161 10.501 21.8879C12.9517 22.2596 15.4531 21.708 17.52 20.34"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 21C20.105 21 21 20.105 21 19 21 17.895 20.105 17 19 17 17.895 17 17 17.895 17 19 17 20.105 17.895 21 19 21ZM13.41 13.41 17.59 17.59M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Radius doesn't support ${type}`);
  return null;
});

Radius.displayName = "Radius";

Radius.metadata = {
  name: "Radius",
  category: "stroke/mathematics",
  tags: ["radius", "icon"],
  description: "Radius icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Radius;
