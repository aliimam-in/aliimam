import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TowerControlProps extends IconProps {
  type?: "stroke";
}

export const TowerControl: IconComponent<TowerControlProps> = React.forwardRef<
  SVGSVGElement,
  TowerControlProps
>(function TowerControl(
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
          d="M18.2 12.27 20 6H4L5.8 12.27C5.858 12.478 5.982 12.661 6.154 12.793 6.325 12.925 6.534 12.997 6.75 13H17.25C17.468 12.999 17.679 12.928 17.852 12.796 18.026 12.664 18.151 12.48 18.21 12.27H18.2ZM8 13V22M16 22V13M9 6 10 13M15 6 14 13M12 6V2M13 2H11"
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
          d="M18.2 12.27 20 6H4L5.8 12.27C5.858 12.478 5.982 12.661 6.154 12.793 6.325 12.925 6.534 12.997 6.75 13H17.25C17.468 12.999 17.679 12.928 17.852 12.796 18.026 12.664 18.151 12.48 18.21 12.27H18.2ZM8 13V22M16 22V13M9 6 10 13M15 6 14 13M12 6V2M13 2H11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`TowerControl doesn't support ${type}`);
  return null;
});

TowerControl.displayName = "TowerControl";

TowerControl.metadata = {
  name: "TowerControl",
  category: "stroke/transportation",
  tags: ["tower", "control", "icon"],
  description: "TowerControl icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TowerControl;
