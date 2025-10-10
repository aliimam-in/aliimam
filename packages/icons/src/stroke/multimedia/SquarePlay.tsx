import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquarePlayProps extends IconProps {
  type?: "stroke";
}

export const SquarePlay: IconComponent<SquarePlayProps> = React.forwardRef<
  SVGSVGElement,
  SquarePlayProps
>(function SquarePlay(
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
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.00001 9.00299C8.99947 8.82552 9.04617 8.65111 9.13532 8.49766C9.22446 8.3442 9.35284 8.21724 9.50727 8.12979C9.66169 8.04235 9.83661 7.99757 10.0141 8.00007C10.1915 8.00256 10.3651 8.05224 10.517 8.14399L15.514 11.141C15.6628 11.2297 15.786 11.3554 15.8715 11.506C15.9571 11.6566 16.002 11.8268 16.002 12C16.002 12.1732 15.9571 12.3434 15.8715 12.494C15.786 12.6445 15.6628 12.7703 15.514 12.859L10.517 15.856C10.365 15.9478 10.1913 15.9975 10.0138 15.9999C9.83627 16.0024 9.66129 15.9575 9.50683 15.8699C9.35237 15.7824 9.22401 15.6553 9.13494 15.5017C9.04587 15.3481 8.99929 15.1735 9.00001 14.996V9.00299Z"
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
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.00001 9.00302C8.99947 8.82555 9.04617 8.65114 9.13532 8.49769C9.22446 8.34423 9.35284 8.21727 9.50727 8.12982C9.66169 8.04238 9.83661 7.9976 10.0141 8.0001C10.1915 8.00259 10.3651 8.05227 10.517 8.14402L15.514 11.141C15.6628 11.2297 15.786 11.3555 15.8715 11.506C15.9571 11.6566 16.002 11.8268 16.002 12C16.002 12.1732 15.9571 12.3434 15.8715 12.494C15.786 12.6446 15.6628 12.7704 15.514 12.859L10.517 15.856C10.365 15.9478 10.1913 15.9975 10.0138 15.9999C9.83627 16.0024 9.66129 15.9575 9.50683 15.87C9.35237 15.7824 9.22401 15.6553 9.13494 15.5017C9.04587 15.3481 8.99929 15.1736 9.00001 14.996V9.00302Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SquarePlay doesn't support ${type}`);
  return null;
});

SquarePlay.displayName = "SquarePlay";

SquarePlay.metadata = {
  name: "SquarePlay",
  category: "stroke/multimedia",
  tags: ["square", "play", "icon"],
  description: "SquarePlay icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePlay;
