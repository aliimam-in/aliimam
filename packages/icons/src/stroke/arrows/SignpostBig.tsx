import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SignpostBig: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SignpostBig(
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
        d="M10 9H4L2 7 4 5H10M14 5H20L22 7 20 9H14M10 22V4C10 3.47 10.211 2.961 10.586 2.586 10.961 2.211 11.47 2 12 2 12.53 2 13.039 2.211 13.414 2.586 13.789 2.961 14 3.47 14 4V22M8 22H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SignpostBig.displayName = "SignpostBig";

SignpostBig.metadata = {
  name: "SignpostBig",
  category: "stroke/arrows",
  tags: ["signpost", "big", "icon"],
  description: "SignpostBig icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SignpostBig;
