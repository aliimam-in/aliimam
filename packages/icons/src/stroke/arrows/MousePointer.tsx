import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MousePointer: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MousePointer(
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
        d="M12.586 12.586 19 19M3.688 3.037C3.597 2.999 3.497 2.988 3.4 3.007 3.303 3.026 3.213 3.074 3.144 3.144 3.074 3.213 3.026 3.303 3.007 3.4 2.988 3.497 2.999 3.597 3.037 3.688L9.537 19.687C9.577 19.784 9.646 19.866 9.735 19.921 9.824 19.976 9.928 20.002 10.033 19.996 10.137 19.989 10.237 19.949 10.318 19.883 10.399 19.816 10.457 19.726 10.484 19.625L12.053 13.542C12.137 13.187 12.316 12.861 12.571 12.601 12.826 12.34 13.148 12.154 13.501 12.063L19.625 10.484C19.727 10.458 19.818 10.4 19.885 10.319 19.952 10.238 19.991 10.138 19.998 10.033 20.005 9.928 19.979 9.824 19.923 9.735 19.868 9.646 19.785 9.577 19.688 9.537L3.688 3.037Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MousePointer.displayName = "MousePointer";

MousePointer.metadata = {
  name: "MousePointer",
  category: "stroke/arrows",
  tags: ["mouse", "pointer", "icon"],
  description: "MousePointer icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MousePointer;
