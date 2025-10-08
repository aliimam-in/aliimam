import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FunnelX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FunnelX(
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
        d="M12.531 3H3C2.807 3 2.617 3.056 2.455 3.162 2.293 3.267 2.165 3.417 2.087 3.594 2.008 3.771 1.982 3.966 2.013 4.157 2.043 4.348 2.128 4.526 2.258 4.67L9.483 12.659C9.816 13.027 10 13.504 10 14V20C10 20.186 10.052 20.368 10.149 20.526 10.247 20.684 10.387 20.812 10.553 20.895L12.553 21.895C12.706 21.971 12.875 22.007 13.045 21.999 13.216 21.992 13.381 21.941 13.526 21.851 13.671 21.761 13.791 21.636 13.874 21.487 13.957 21.338 14 21.171 14 21V14C14 13.504 14.185 13.027 14.517 12.659L14.944 12.186M16.5 3.5 21.5 8.5M21.5 3.5 16.5 8.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FunnelX.displayName = "FunnelX";

FunnelX.metadata = {
  name: "FunnelX",
  category: "stroke/layout",
  tags: ["funnel", "icon"],
  description: "FunnelX icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FunnelX;
