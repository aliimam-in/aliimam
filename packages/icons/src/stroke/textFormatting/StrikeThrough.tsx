import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const StrikeThrough: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function StrikeThrough(
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
        d="M16 4H9C8.52 4 8.047 4.115 7.62 4.335 7.194 4.556 6.827 4.875 6.55 5.267 6.272 5.659 6.093 6.112 6.027 6.587 5.961 7.063 6.01 7.547 6.17 8M14 12C15.061 12 16.078 12.421 16.828 13.172 17.579 13.922 18 14.939 18 16 18 17.061 17.579 18.078 16.828 18.828 16.078 19.579 15.061 20 14 20H6M4 12H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StrikeThrough.displayName = "StrikeThrough";

StrikeThrough.metadata = {
  name: "StrikeThrough",
  category: "stroke/textFormatting",
  tags: ["strike", "through", "icon"],
  description: "StrikeThrough icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StrikeThrough;
