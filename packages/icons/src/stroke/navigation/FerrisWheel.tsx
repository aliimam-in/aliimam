import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FerrisWheel: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FerrisWheel(
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
        d="M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM12 2V6M6.8 15 3.3 17M20.7 7 17.2 9M6.8 9 3.3 7M20.7 17 17.2 15M9 22 12 14 15 22M8 22H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18.7C19.3586 17.4849 20.3162 15.8859 20.7461 14.1146C21.176 12.3432 21.0579 10.4832 20.4076 8.78042C19.7572 7.07768 18.6051 5.61255 17.1038 4.57891C15.6025 3.54526 13.8227 2.99182 12 2.99182C10.1773 2.99182 8.39751 3.54526 6.89621 4.57891C5.39491 5.61255 4.24284 7.07768 3.59245 8.78042C2.94206 10.4832 2.82401 12.3432 3.25392 14.1146C3.68382 15.8859 4.64142 17.4849 6 18.7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FerrisWheel.displayName = "FerrisWheel";

FerrisWheel.metadata = {
  name: "FerrisWheel",
  category: "stroke/navigation",
  tags: ["ferris", "wheel", "icon"],
  description: "FerrisWheel icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FerrisWheel;
