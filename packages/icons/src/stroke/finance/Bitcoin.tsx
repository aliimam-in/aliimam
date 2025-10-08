import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BitcoinProps extends IconProps {
  type?: "stroke";
}

export const Bitcoin: IconComponent<BitcoinProps> = React.forwardRef<
  SVGSVGElement,
  BitcoinProps
>(function Bitcoin(
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
          d="M11.767 19.089C16.691 19.957 17.907 13.064 12.983 12.195M11.767 19.089L5.86 18.047M11.767 19.089L11.421 21.059M9.044 11.501L12.984 12.195C17.908 13.064 19.124 6.17002 14.199 5.30202L8.29 4.26002M14.198 5.30202L14.546 3.33202M7.48 20.364L10.606 2.63702"
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
          d="M11.7671 19.089C16.6911 19.957 17.9071 13.064 12.9831 12.195M11.7671 19.089L5.86011 18.047M11.7671 19.089L11.4211 21.059M9.04411 11.501L12.9841 12.195C17.9081 13.064 19.1241 6.16996 14.1991 5.30196L8.29011 4.25996M14.1981 5.30196L14.5461 3.33196M7.48011 20.364L10.6061 2.63696"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Bitcoin doesn't support ${type}`);
  return null;
});

Bitcoin.displayName = "Bitcoin";

Bitcoin.metadata = {
  name: "Bitcoin",
  category: "stroke/finance",
  tags: ["bitcoin", "icon"],
  description: "Bitcoin icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bitcoin;
