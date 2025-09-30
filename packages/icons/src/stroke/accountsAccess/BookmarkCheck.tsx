import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BookmarkCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BookmarkCheck(
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
        d="M19 21L12 17L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L11 12L15 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BookmarkCheck.displayName = "BookmarkCheck";

BookmarkCheck.metadata = {
  name: "BookmarkCheck",
  category: "stroke/accountsAccess",
  tags: ["bookmark", "check", "icon"],
  description: "BookmarkCheck icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookmarkCheck;
