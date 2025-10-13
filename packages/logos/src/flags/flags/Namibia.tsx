import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Namibia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Namibia(
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
        d="M2.316 26.947L29.684 5.053C28.973 4.405 28.037 4 27 4H5C2.791 4 1 5.791 1 8V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#0e2a68"
      />
      <path
        d="M29.684 5.05298L2.31598 26.947C3.02698 27.595 3.96298 28 4.99998 28H27C29.209 28 31 26.209 31 24V7.99998C31 6.82798 30.487 5.78398 29.684 5.05298Z"
        fill="#44994d"
      />
      <path
        d="M27 4H25.397L1 23.518V24C1 26.209 2.791 28 5 28H6.603L31 8.482V8C31 5.791 29.209 4 27 4Z"
        fill="#fff"
      />
      <path
        d="M27 4H26.998L1.07397 24.739C1.42097 26.594 3.04397 28 4.99997 28H5.00197L30.926 7.261C30.579 5.406 28.956 4 27 4Z"
        fill="#b92831"
      />
      <path
        d="M7.344 12.815C8.299 12.815 9.073 12.041 9.073 11.086 9.073 10.131 8.299 9.357 7.344 9.357 6.389 9.357 5.615 10.131 5.615 11.086 5.615 12.041 6.389 12.815 7.344 12.815ZM6.807 9.082C6.978 9.036 7.158 9.011 7.344 9.011 7.53 9.011 7.71 9.036 7.881 9.082L7.344 7.628 6.807 9.082Z"
        fill="#f6ce46"
      />
      <path
        d="M9.34797 11.6231L10.802 11.0861L9.34797 10.5491L10.338 9.35707L8.80997 9.61907L9.07197 8.09106L7.87997 9.08206C8.76497 9.31906 9.41797 10.1281 9.41797 11.0861C9.41797 12.2301 8.48697 13.1611 7.34297 13.1611C6.19897 13.1611 5.26797 12.2301 5.26797 11.0861C5.26797 10.1281 5.92097 9.31906 6.80597 9.08206L5.61397 8.09106L5.87597 9.61907L4.34797 9.35707L5.33797 10.5491L3.88397 11.0861L5.33797 11.6231L4.34797 12.8151L5.87597 12.5531L5.61397 14.0811L6.80597 13.0901L7.34297 14.5441L7.87997 13.0901L9.07197 14.0811L8.80997 12.5531L10.338 12.8151L9.34797 11.6231Z"
        fill="#f6ce46"
      />
    </svg>
  );
});

Namibia.displayName = "Namibia";

Namibia.metadata = {
  name: "Namibia",
  category: "flags/flags",
  tags: ["namibia", "icon"],
  description: "Namibia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Namibia;
