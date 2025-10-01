import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WalletMinimal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WalletMinimal(
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
        d="M17 14H17.01M7 7H19C19.53 7 20.039 7.211 20.414 7.586 20.789 7.961 21 8.47 21 9V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WalletMinimal.displayName = "WalletMinimal";

WalletMinimal.metadata = {
  name: "WalletMinimal",
  category: "stroke/accountsAccess",
  tags: ["wallet", "minimal", "icon"],
  description: "WalletMinimal icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WalletMinimal;
