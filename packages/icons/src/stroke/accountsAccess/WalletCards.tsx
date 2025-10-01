import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WalletCards: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WalletCards(
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
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9C3 8.47 3.211 7.961 3.586 7.586 3.961 7.211 4.47 7 5 7H19C19.53 7 20.039 7.211 20.414 7.586 20.789 7.961 21 8.47 21 9M3 11H6C6.8 11 7.6 11.3 8.1 11.9L9.2 12.8C10.8 14.4 13.3 14.4 14.9 12.8L16 11.9C16.5 11.4 17.3 11 18.1 11H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WalletCards.displayName = "WalletCards";

WalletCards.metadata = {
  name: "WalletCards",
  category: "stroke/accountsAccess",
  tags: ["wallet", "cards", "icon"],
  description: "WalletCards icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WalletCards;
