import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PickaxeProps extends IconProps {
  type?: "stroke";
}

export const Pickaxe: IconComponent<PickaxeProps> = React.forwardRef<
  SVGSVGElement,
  PickaxeProps
>(function Pickaxe(
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
          d="M14 13 5.619 21.38C5.422 21.577 5.188 21.733 4.931 21.84 4.673 21.947 4.397 22.002 4.119 22.002 3.556 22.002 3.016 21.778 2.618 21.381 2.22 20.983 1.997 20.443 1.997 19.88 1.996 19.318 2.22 18.778 2.618 18.38L11 9.999M15.973 4.027C14.493 3.086 12.837 2.455 11.106 2.17 9.376 1.886 7.605 1.955 5.902 2.373 4.504 2.715 4.81 4.531 6.179 4.974 8.273 5.653 10.241 6.675 12.001 7.998M16.001 11.999C17.324 13.76 18.346 15.728 19.025 17.823 19.469 19.192 21.285 19.499 21.628 18.101 22.044 16.405 22.115 14.643 21.835 12.919 21.555 11.196 20.931 9.546 20 8.069"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3519 3.35202C18.1259 3.12608 17.8195 2.99915 17.4999 2.99915C17.1803 2.99915 16.8739 3.12608 16.6479 3.35202L11.3519 8.64802C11.126 8.87399 10.999 9.18046 10.999 9.50002C10.999 9.81957 11.126 10.126 11.3519 10.352L13.6479 12.648C13.8739 12.874 14.1803 13.0009 14.4999 13.0009C14.8195 13.0009 15.1259 12.874 15.3519 12.648L20.6479 7.35202C20.8738 7.12604 21.0008 6.81957 21.0008 6.50002C21.0008 6.18046 20.8738 5.87399 20.6479 5.64802L18.3519 3.35202Z"
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
          d="M14 13 5.619 21.38C5.422 21.577 5.188 21.733 4.931 21.84 4.673 21.947 4.397 22.002 4.119 22.002 3.556 22.002 3.016 21.778 2.619 21.381 2.221 20.983 1.997 20.443 1.997 19.88 1.997 19.318 2.22 18.778 2.618 18.38L11 9.999M15.973 4.027C14.493 3.086 12.837 2.455 11.107 2.17 9.376 1.886 7.605 1.955 5.902 2.373 4.504 2.715 4.81 4.531 6.179 4.974 8.274 5.653 10.241 6.675 12.001 7.998M16.001 11.999C17.324 13.76 18.346 15.728 19.025 17.823 19.469 19.192 21.285 19.499 21.628 18.101 22.044 16.405 22.115 14.643 21.835 12.919 21.555 11.196 20.931 9.546 20 8.069"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.352 3.35202C18.126 3.12608 17.8196 2.99915 17.5 2.99915C17.1805 2.99915 16.874 3.12608 16.648 3.35202L11.352 8.64802C11.1261 8.87399 10.9991 9.18046 10.9991 9.50002C10.9991 9.81957 11.1261 10.126 11.352 10.352L13.648 12.648C13.874 12.874 14.1805 13.0009 14.5 13.0009C14.8196 13.0009 15.126 12.874 15.352 12.648L20.648 7.35202C20.874 7.12604 21.0009 6.81957 21.0009 6.50002C21.0009 6.18046 20.874 5.87399 20.648 5.64802L18.352 3.35202Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Pickaxe doesn't support ${type}`);
  return null;
});

Pickaxe.displayName = "Pickaxe";

Pickaxe.metadata = {
  name: "Pickaxe",
  category: "stroke/tools",
  tags: ["pickaxe", "icon"],
  description: "Pickaxe icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pickaxe;
