import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SkipForwardProps extends IconProps {
  type?: "stroke";
}

export const SkipForward: IconComponent<SkipForwardProps> = React.forwardRef<
  SVGSVGElement,
  SkipForwardProps
>(function SkipForward(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M21 4V20M6.029 4.285C5.726 4.103 5.379 4.005 5.025 4 4.671 3.996 4.323 4.085 4.015 4.26 3.707 4.434 3.45 4.687 3.272 4.993 3.094 5.298 3 5.646 3 6V18C3 18.354 3.094 18.702 3.272 19.007 3.45 19.313 3.707 19.566 4.015 19.74 4.323 19.915 4.671 20.004 5.025 20 5.379 19.995 5.726 19.897 6.029 19.715L16.026 13.717C16.323 13.54 16.569 13.289 16.739 12.988 16.91 12.687 17 12.348 17 12.002 17.001 11.656 16.911 11.316 16.741 11.015 16.571 10.715 16.326 10.463 16.029 10.285L6.029 4.285Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M21 4V20M6.029 4.285C5.726 4.103 5.379 4.005 5.025 4 4.671 3.996 4.323 4.085 4.015 4.26 3.707 4.434 3.45 4.687 3.272 4.993 3.094 5.299 3 5.646 3 6V18C3 18.354 3.094 18.702 3.272 19.007 3.45 19.313 3.707 19.566 4.015 19.74 4.323 19.915 4.671 20.004 5.025 20 5.379 19.995 5.726 19.897 6.029 19.715L16.026 13.717C16.323 13.54 16.569 13.289 16.739 12.988 16.91 12.687 17 12.348 17 12.002 17.001 11.656 16.911 11.316 16.741 11.015 16.571 10.715 16.326 10.463 16.029 10.285L6.029 4.285Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SkipForward doesn't support ${type}`);
  return null;
});

SkipForward.displayName = "SkipForward";

SkipForward.metadata = {
  name: "SkipForward",
  category: "stroke/multimedia",
  tags: ["skip", "forward", "icon"],
  description: "SkipForward icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SkipForward;
