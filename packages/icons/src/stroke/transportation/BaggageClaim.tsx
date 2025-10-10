import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BaggageClaimProps extends IconProps {
  type?: "stroke";
}

export const BaggageClaim: IconComponent<BaggageClaimProps> = React.forwardRef<
  SVGSVGElement,
  BaggageClaimProps
>(function BaggageClaim(
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
          d="M22 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V7C4 6.46957 3.78929 5.96086 3.41421 5.58579C3.03914 5.21071 2.53043 5 2 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 14V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H14C13.4696 2 12.9609 2.21071 12.5858 2.58579C12.2107 2.96086 12 3.46957 12 4V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6H9C8.448 6 8 6.448 8 7V13C8 13.552 8.448 14 9 14H20C20.552 14 21 13.552 21 13V7C21 6.448 20.552 6 20 6ZM18 22C19.105 22 20 21.105 20 20 20 18.895 19.105 18 18 18 16.895 18 16 18.895 16 20 16 21.105 16.895 22 18 22ZM9 22C10.105 22 11 21.105 11 20 11 18.895 10.105 18 9 18 7.895 18 7 18.895 7 20 7 21.105 7.895 22 9 22Z"
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
          d="M22 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V7C4 6.46957 3.78929 5.96086 3.41421 5.58579C3.03914 5.21071 2.53043 5 2 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 14V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H14C13.4696 2 12.9609 2.21071 12.5858 2.58579C12.2107 2.96086 12 3.46957 12 4V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6H9C8.448 6 8 6.448 8 7V13C8 13.552 8.448 14 9 14H20C20.552 14 21 13.552 21 13V7C21 6.448 20.552 6 20 6ZM18 22C19.105 22 20 21.105 20 20 20 18.895 19.105 18 18 18 16.895 18 16 18.895 16 20 16 21.105 16.895 22 18 22ZM9 22C10.105 22 11 21.105 11 20 11 18.895 10.105 18 9 18 7.895 18 7 18.895 7 20 7 21.105 7.895 22 9 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BaggageClaim doesn't support ${type}`);
  return null;
});

BaggageClaim.displayName = "BaggageClaim";

BaggageClaim.metadata = {
  name: "BaggageClaim",
  category: "stroke/transportation",
  tags: ["baggage", "claim", "icon"],
  description: "BaggageClaim icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BaggageClaim;
