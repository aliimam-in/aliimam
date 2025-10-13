import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Singapore: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Singapore(
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
      viewBox="0 0 32 32"
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
        fill="#fff"
      />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
        fill="#db3c3f"
      />
      <path
        d="M6.811 10.5C6.811 8.602 8.132 7.013 9.905 6.603 9.614 6.536 9.311 6.5 8.999 6.5 6.79 6.5 4.999 8.291 4.999 10.5 4.999 12.709 6.79 14.5 8.999 14.5 9.31 14.5 9.614 14.464 9.905 14.397 8.132 13.987 6.811 12.398 6.811 10.5ZM10.81 8.329 10.576 9.048 11.189 8.603 11.801 9.048 11.567 8.329 12.179 7.884H11.423L11.189 7.164 10.955 7.884H10.198L10.81 8.329ZM14.361 9.469H13.605L13.371 8.749 13.137 9.469H12.38L12.992 9.914 12.759 10.634 13.371 10.189 13.983 10.634 13.749 9.914 14.361 9.469Z"
        fill="#fff"
      />
      <path
        d="M10.074 12.034 9.84 11.315 9.606 12.034H8.85L9.462 12.479 9.228 13.199 9.84 12.754 10.452 13.199 10.218 12.479 10.831 12.034H10.074ZM12.771 12.034 12.537 11.315 12.303 12.034H11.547L12.159 12.479 11.925 13.199 12.537 12.754 13.149 13.199 12.916 12.479 13.528 12.034H12.771ZM9.24 9.469 9.007 8.75 8.773 9.469H8.016L8.628 9.914 8.394 10.634 9.007 10.189 9.619 10.634 9.385 9.914 9.997 9.469H9.24Z"
        fill="#fff"
      />
    </svg>
  );
});

Singapore.displayName = "Singapore";

Singapore.metadata = {
  name: "Singapore",
  category: "flags/flags",
  tags: ["singapore", "icon"],
  description: "Singapore icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Singapore;
