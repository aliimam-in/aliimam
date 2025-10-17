import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EsLint: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function EsLint(
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
        <g clipPath="url(#undefined-clip0_2066_933)">
          <path
            d="M7.31586 8.68305L11.8179 6.09834C11.8732 6.06654 11.936 6.0498 12 6.0498C12.0639 6.0498 12.1267 6.06654 12.1821 6.09834L16.6842 8.68305C16.7395 8.71486 16.7855 8.76058 16.8174 8.81563C16.8494 8.87068 16.8662 8.93312 16.8662 8.99669V14.166C16.8662 14.2953 16.7968 14.415 16.6842 14.4797L12.1821 17.0644C12.1267 17.0962 12.0639 17.1129 12 17.1129C11.936 17.1129 11.8732 17.0962 11.8179 17.0644L7.31586 14.4797C7.26051 14.4479 7.21455 14.4021 7.18259 14.3471C7.15064 14.292 7.1338 14.2296 7.13379 14.166V8.99669C7.13383 8.93313 7.15067 8.87069 7.18262 8.81564C7.21458 8.76059 7.26053 8.71487 7.31586 8.68305Z"
            fill="#8080f2"
          />
          <path
            d="M23.7052 11.0376L18.3263 1.73197C18.1308 1.39557 17.77 1.14734 17.3792 1.14734H6.62099C6.23018 1.14734 5.86914 1.39557 5.67373 1.73197L0.294693 11.017C0.09936 11.3537 0.09936 11.7783 0.294693 12.1149L5.67373 21.3442C5.86914 21.6807 6.23018 21.8527 6.62099 21.8527H17.3791C17.7698 21.8527 18.1308 21.6859 18.3261 21.3493L23.7052 12.1049C23.9008 11.7685 23.9008 11.3741 23.7054 11.0376M19.2512 15.5124C19.2512 15.6491 19.1684 15.7757 19.0491 15.8442L12.1974 19.7751C12.1384 19.8088 12.0716 19.8264 12.0036 19.8264C11.9356 19.8264 11.8688 19.8088 11.8098 19.7751L4.95277 15.8442C4.83358 15.7757 4.75025 15.6493 4.75025 15.5123V7.65028C4.75025 7.51343 4.8324 7.38695 4.95166 7.31845L11.8031 3.38747C11.862 3.35381 11.9288 3.33611 11.9968 3.33611C12.0647 3.33611 12.1315 3.35381 12.1905 3.38747L19.048 7.31845C19.1673 7.38695 19.2512 7.51343 19.2512 7.65028V15.5124Z"
            fill="#4b32c3"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_933">
            <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

EsLint.displayName = "EsLint";

EsLint.metadata = {
  name: "EsLint",
  category: "icon/library",
  tags: ["es", "lint", "icon"],
  description: "EsLint icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EsLint;
