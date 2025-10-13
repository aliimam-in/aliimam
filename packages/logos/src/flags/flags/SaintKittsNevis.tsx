import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SaintKittsNevis: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SaintKittsNevis(
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
        fill="#439643"
      />
      <path
        d="M29.684 5.05298L2.31598 26.947C3.02698 27.595 3.96298 28 4.99998 28H27C29.209 28 31 26.209 31 24V7.99998C31 6.82798 30.487 5.78398 29.684 5.05298Z"
        fill="#b92932"
      />
      <path
        d="M27 4H25.397L1 23.518V24C1 26.209 2.791 28 5 28H6.603L31 8.482V8C31 5.791 29.209 4 27 4Z"
        fill="#f2d84b"
      />
      <path
        d="M27 4H26.998L1.07397 24.739C1.42097 26.594 3.04397 28 4.99997 28H5.00197L30.926 7.261C30.579 5.406 28.956 4 27 4Z"
        fill="currentColor"
      />
      <path
        d="M12.462 19.359 12.907 17.755 11.604 18.791 10.216 17.872 10.799 19.432 9.496 20.468 11.159 20.396 11.742 21.955 12.187 20.351 13.851 20.278 12.462 19.359ZM21.07 13.286 22.733 13.214 21.345 12.295 21.79 10.691 20.487 11.727 19.099 10.808 19.682 12.367 18.379 13.404 20.042 13.331 20.625 14.891 21.07 13.286Z"
        fill="#fff"
      />
    </svg>
  );
});

SaintKittsNevis.displayName = "SaintKittsNevis";

SaintKittsNevis.metadata = {
  name: "SaintKittsNevis",
  category: "flags/flags",
  tags: ["saint", "kitts", "nevis", "icon"],
  description: "SaintKittsNevis icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SaintKittsNevis;
