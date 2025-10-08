import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CreditCardProps extends IconProps {
  type?: "stroke";
}

export const CreditCard: IconComponent<CreditCardProps> = React.forwardRef<
  SVGSVGElement,
  CreditCardProps
>(function CreditCard(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M20 5H4C2.895 5 2 5.895 2 7V17C2 18.105 2.895 19 4 19H20C21.105 19 22 18.105 22 17V7C22 5.895 21.105 5 20 5ZM2 10H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M20 5H4C2.895 5 2 5.895 2 7V17C2 18.105 2.895 19 4 19H20C21.105 19 22 18.105 22 17V7C22 5.895 21.105 5 20 5ZM2 10H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CreditCard doesn't support ${type}`);
  return null;
});

CreditCard.displayName = "CreditCard";

CreditCard.metadata = {
  name: "CreditCard",
  category: "stroke/finance",
  tags: ["credit", "card", "icon"],
  description: "CreditCard icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CreditCard;
