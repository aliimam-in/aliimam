import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RadioTowerProps extends IconProps {
  type?: "stroke";
}

export const RadioTower: IconComponent<RadioTowerProps> = React.forwardRef<
  SVGSVGElement,
  RadioTowerProps
>(function RadioTower(
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
          d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9M7.8 4.7C6.851 5.683 6.257 6.954 6.113 8.313 5.968 9.671 6.28 11.039 7 12.2M12 11C13.105 11 14 10.105 14 9 14 7.895 13.105 7 12 7 10.895 7 10 7.895 10 9 10 10.105 10.895 11 12 11ZM16.2 4.8C18.2 6.8 18.46 9.91 17 12.27M19.1 1.9C20.027 2.825 20.763 3.924 21.264 5.134 21.766 6.344 22.025 7.64 22.025 8.95 22.025 10.26 21.766 11.557 21.264 12.766 20.763 13.976 20.027 15.075 19.1 16M9.5 18H14.5M8 22 12 11 16 22"
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
          d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9M7.8 4.7C6.851 5.683 6.257 6.954 6.113 8.313 5.968 9.671 6.28 11.039 7 12.2M12 11C13.105 11 14 10.105 14 9 14 7.895 13.105 7 12 7 10.895 7 10 7.895 10 9 10 10.105 10.895 11 12 11ZM16.2 4.8C18.2 6.8 18.46 9.91 17 12.27M19.1 1.9C20.027 2.825 20.763 3.924 21.264 5.134 21.766 6.344 22.025 7.64 22.025 8.95 22.025 10.26 21.766 11.557 21.264 12.766 20.763 13.976 20.027 15.075 19.1 16M9.5 18H14.5M8 22 12 11 16 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`RadioTower doesn't support ${type}`);
  return null;
});

RadioTower.displayName = "RadioTower";

RadioTower.metadata = {
  name: "RadioTower",
  category: "stroke/multimedia",
  tags: ["radio", "tower", "icon"],
  description: "RadioTower icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RadioTower;
