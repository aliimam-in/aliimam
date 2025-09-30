import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BookmarkMinus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BookmarkMinus(
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
        d="M19 21 12 17 5 21V5C5 4.47 5.211 3.961 5.586 3.586 5.961 3.211 6.47 3 7 3H17C17.53 3 18.039 3.211 18.414 3.586 18.789 3.961 19 4.47 19 5V21ZM15 10H9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BookmarkMinus.displayName = "BookmarkMinus";

BookmarkMinus.metadata = {
  name: "BookmarkMinus",
  category: "stroke/accountsAccess",
  tags: ["bookmark", "minus", "icon"],
  description: "BookmarkMinus icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookmarkMinus;
