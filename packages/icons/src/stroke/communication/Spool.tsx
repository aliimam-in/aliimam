import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Spool: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Spool(
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
          d="M17 13.44L4.44195 17.082C3.98292 17.2175 3.5877 17.5131 3.32806 17.9152C3.06841 18.3173 2.96157 18.7991 3.02691 19.2732C3.09226 19.7474 3.32547 20.1824 3.6842 20.4992C4.04292 20.816 4.50338 20.9937 4.98195 21H19C19.4818 21.0004 19.9476 20.8267 20.3117 20.511C20.6757 20.1954 20.9136 19.7588 20.9814 19.2818C21.0493 18.8047 20.9427 18.3192 20.6812 17.9145C20.4196 17.5098 20.0208 17.2131 19.558 17.079L18.443 16.759C18.0266 16.6383 17.6608 16.3856 17.4006 16.0389C17.1403 15.6923 16.9997 15.2705 17 14.837V7.66"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99998 10.56L19.558 6.918C20.017 6.7825 20.4122 6.48687 20.6719 6.08481C20.9315 5.68274 21.0384 5.20089 20.973 4.72676C20.9077 4.25263 20.6745 3.81765 20.3157 3.50081C19.957 3.18397 19.4966 3.00628 19.018 3H4.99998C4.51812 2.99965 4.05233 3.17329 3.68828 3.48897C3.32422 3.80465 3.08638 4.24116 3.01849 4.71822C2.9506 5.19527 3.05723 5.6808 3.31876 6.08551C3.5803 6.49023 3.97915 6.78691 4.44198 6.921L5.55698 7.241C5.9733 7.36172 6.33913 7.61443 6.59938 7.96107C6.85964 8.30772 7.00023 8.72953 6.99998 9.163V16.341"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Spool.displayName = "Spool";

Spool.metadata = {
  name: "Spool",
  category: "stroke/communication",
  tags: ["spool", "icon"],
  description: "Spool icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Spool;
