import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Portugal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Portugal(
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
        d="M5 4H13V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
        fill="#2b6519"
      />
      <path
        d="M27 28L12 28L12 4L27 4C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z"
        fill="#ea3323"
      />
      <path
        d="M12 21C14.7614 21 17 18.7614 17 16C17 13.2386 14.7614 11 12 11C9.23858 11 7 13.2386 7 16C7 18.7614 9.23858 21 12 21Z"
        fill="#ff5"
      />
      <path
        d="M14.562 13.5289L9.43701 13.5229V16.9539C9.44101 17.6259 9.70801 18.2609 10.19 18.7409C10.681 19.2299 11.322 19.4999 11.995 19.4999C12.679 19.4999 13.323 19.2329 13.808 18.7499C14.293 18.2659 14.561 17.6239 14.561 16.9419V13.5289H14.562Z"
        fill="#ea3323"
      />
    </svg>
  );
});

Portugal.displayName = "Portugal";

Portugal.metadata = {
  name: "Portugal",
  category: "symbols/flags",
  tags: ["portugal", "icon"],
  description: "Portugal icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Portugal;
