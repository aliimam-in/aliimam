import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower13: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower13(
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
        d="M12 0C10.078 0 8.52 1.55805 8.52 3.48V3.59854L8.43618 3.51472C7.07716 2.1557 4.87375 2.1557 3.51472 3.51472C2.1557 4.87374 2.1557 7.07716 3.51472 8.43618L3.59854 8.52H3.48C1.55805 8.52 0 10.078 0 12C-2.36127e-07 13.9219 1.55805 15.48 3.48 15.48H3.59853L3.51472 15.5638C2.1557 16.9228 2.1557 19.1263 3.51472 20.4853C4.87374 21.8443 7.07716 21.8443 8.43618 20.4853L8.52 20.4015V20.52C8.52 22.4419 10.078 24 12 24C13.922 24 15.48 22.442 15.48 20.52V20.4015L15.5638 20.4853C16.9228 21.8443 19.1263 21.8443 20.4853 20.4853C21.8443 19.1263 21.8443 16.9228 20.4853 15.5638L20.4015 15.48H20.52C22.4419 15.48 24 13.922 24 12C24 10.078 22.442 8.52 20.52 8.52H20.4015L20.4853 8.43618C21.8443 7.07715 21.8443 4.87374 20.4853 3.51472C19.1263 2.15569 16.9228 2.15569 15.5638 3.51472L15.48 3.59854V3.48C15.48 1.55805 13.922 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

Flower13.displayName = "Flower13";

Flower13.metadata = {
  name: "Flower13",
  category: "shapes/flower",
  tags: ["flower", "13", "icon"],
  description: "Flower13 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower13;
