import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PlugProps extends IconProps {
  type?: "stroke";
}

export const Plug: IconComponent<PlugProps> = React.forwardRef<
  SVGSVGElement,
  PlugProps
>(function Plug(
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
          d="M12 22V17M9 8V2M15 8V2M18 8V13C18 14.061 17.579 15.078 16.828 15.828 16.078 16.579 15.061 17 14 17H10C8.939 17 7.922 16.579 7.172 15.828 6.421 15.078 6 14.061 6 13V8H18Z"
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
          d="M12 22V17M9 8V2M15 8V2M18 8V13C18 14.061 17.579 15.078 16.828 15.828 16.078 16.579 15.061 17 14 17H10C8.939 17 7.922 16.579 7.172 15.828 6.421 15.078 6 14.061 6 13V8H18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Plug doesn't support ${type}`);
  return null;
});

Plug.displayName = "Plug";

Plug.metadata = {
  name: "Plug",
  category: "stroke/devices",
  tags: ["plug", "icon"],
  description: "Plug icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Plug;
