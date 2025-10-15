import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrustWallet: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrustWallet(
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
        d="M1.03357 3.46872L11.5076 0.00524902V23.9823C4.02607 20.7851 1.03357 14.6577 1.03357 11.1947V3.46872Z"
        fill="#0500ff"
      />
    </svg>
  );
});

TrustWallet.displayName = "TrustWallet";

TrustWallet.metadata = {
  name: "TrustWallet",
  category: "icon/crypto",
  tags: ["trust", "wallet", "icon"],
  description: "TrustWallet icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrustWallet;
