import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SignalZero: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SignalZero(
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
        d="M2 20H2.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SignalZero.displayName = "SignalZero";

SignalZero.metadata = {
  name: "SignalZero",
  category: "stroke/connectivity",
  tags: ["signal", "zero", "icon"],
  description: "SignalZero icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SignalZero;
