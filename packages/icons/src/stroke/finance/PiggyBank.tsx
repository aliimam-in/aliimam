import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PiggyBank: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PiggyBank(
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
        d="M11 17H14V19C14 19.265 14.105 19.52 14.293 19.707 14.48 19.895 14.735 20 15 20H17C17.265 20 17.52 19.895 17.707 19.707 17.895 19.52 18 19.265 18 19V16C18.466 15.845 18.889 15.583 19.236 15.236 19.583 14.889 19.845 14.466 20 14H21C21.265 14 21.52 13.895 21.707 13.707 21.895 13.52 22 13.265 22 13V11C22 10.735 21.895 10.48 21.707 10.293 21.52 10.105 21.265 10 21 10H20C20 9.224 19.819 8.458 19.472 7.764 19.125 7.07 18.621 6.466 18 6V3C17.379 3 16.767 3.145 16.211 3.422 15.656 3.7 15.173 4.103 14.8 4.6L14.5 5H11C9.409 5 7.883 5.632 6.757 6.757 5.632 7.883 5 9.409 5 11V12C5 12.776 5.181 13.542 5.528 14.236 5.875 14.93 6.379 15.534 7 16V19C7 19.265 7.105 19.52 7.293 19.707 7.48 19.895 7.735 20 8 20H10C10.265 20 10.52 19.895 10.707 19.707 10.895 19.52 11 19.265 11 19V17ZM16 10H16.01M2 8V9C2 9.53 2.211 10.039 2.586 10.414 2.961 10.789 3.47 11 4 11H5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PiggyBank.displayName = "PiggyBank";

PiggyBank.metadata = {
  name: "PiggyBank",
  category: "stroke/finance",
  tags: ["piggy", "bank", "icon"],
  description: "PiggyBank icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PiggyBank;
