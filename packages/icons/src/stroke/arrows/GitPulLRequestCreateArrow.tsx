import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitPulLRequestCreateArrow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitPulLRequestCreateArrow(
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
        d="M5 9C6.657 9 8 7.657 8 6 8 4.343 6.657 3 5 3 3.343 3 2 4.343 2 6 2 7.657 3.343 9 5 9ZM5 9V21M15 9 12 6 15 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6H17C17.53 6 18.039 6.211 18.414 6.586 18.789 6.961 19 7.47 19 8V11M19 15V21M22 18H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitPulLRequestCreateArrow.displayName = "GitPulLRequestCreateArrow";

GitPulLRequestCreateArrow.metadata = {
  name: "GitPulLRequestCreateArrow",
  category: "stroke/arrows",
  tags: ["git", "pul", "lrequest", "create", "arrow", "icon"],
  description: "GitPulLRequestCreateArrow icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitPulLRequestCreateArrow;
