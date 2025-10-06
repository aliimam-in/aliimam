import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SignalMedium: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SignalMedium(
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
        d="M2 20H2.01M7 20V16M12 20V12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SignalMedium.displayName = "SignalMedium";

SignalMedium.metadata = {
  name: "SignalMedium",
  category: "stroke/connectivity",
  tags: ["signal", "medium", "icon"],
  description: "SignalMedium icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SignalMedium;
