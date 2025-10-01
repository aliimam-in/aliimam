import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Vibrate: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Vibrate(
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
        d="M2 8 4 10 2 12 4 14 2 16M22 8 20 10 22 12 20 14 22 16M15 5H9C8.448 5 8 5.448 8 6V18C8 18.552 8.448 19 9 19H15C15.552 19 16 18.552 16 18V6C16 5.448 15.552 5 15 5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Vibrate.displayName = "Vibrate";

Vibrate.metadata = {
  name: "Vibrate",
  category: "stroke/accountsAccess",
  tags: ["vibrate", "icon"],
  description: "Vibrate icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Vibrate;
