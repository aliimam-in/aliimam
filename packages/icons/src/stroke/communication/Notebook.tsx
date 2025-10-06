import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Notebook: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Notebook(
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
        d="M2 6H6M2 10H6M2 14H6M2 18H6M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2ZM16 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Notebook.displayName = "Notebook";

Notebook.metadata = {
  name: "Notebook",
  category: "stroke/communication",
  tags: ["notebook", "icon"],
  description: "Notebook icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Notebook;
