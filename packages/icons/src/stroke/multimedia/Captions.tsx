import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Captions: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Captions(
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
        d="M19 5H5C3.895 5 3 5.895 3 7V17C3 18.105 3.895 19 5 19H19C20.105 19 21 18.105 21 17V7C21 5.895 20.105 5 19 5ZM7 15H11M15 15H17M7 11H9M13 11H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Captions.displayName = "Captions";

Captions.metadata = {
  name: "Captions",
  category: "stroke/multimedia",
  tags: ["captions", "icon"],
  description: "Captions icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Captions;
