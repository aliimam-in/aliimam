import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CirclePlay: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CirclePlay(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M9.00001 9.00302C8.99947 8.82555 9.04617 8.65114 9.13532 8.49769C9.22446 8.34423 9.35284 8.21727 9.50727 8.12982C9.66169 8.04238 9.83661 7.9976 10.0141 8.0001C10.1915 8.00259 10.3651 8.05227 10.517 8.14402L15.514 11.141C15.6628 11.2297 15.786 11.3555 15.8715 11.506C15.9571 11.6566 16.002 11.8268 16.002 12C16.002 12.1732 15.9571 12.3434 15.8715 12.494C15.786 12.6446 15.6628 12.7704 15.514 12.859L10.517 15.856C10.365 15.9478 10.1913 15.9975 10.0138 15.9999C9.83627 16.0024 9.66129 15.9575 9.50683 15.87C9.35237 15.7824 9.22401 15.6553 9.13494 15.5017C9.04587 15.3481 8.99929 15.1736 9.00001 14.996V9.00302Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CirclePlay.displayName = "CirclePlay";

CirclePlay.metadata = {
  name: "CirclePlay",
  category: "stroke/multimedia",
  tags: ["circle", "play", "icon"],
  description: "CirclePlay icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CirclePlay;
