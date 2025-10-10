import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VolleyballProps extends IconProps {
  type?: "stroke";
}

export const Volleyball: IconComponent<VolleyballProps> = React.forwardRef<
  SVGSVGElement,
  VolleyballProps
>(function Volleyball(
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
          d="M11.1 7.1C15.097 7.073 18.969 8.494 22 11.1M12 12C10.97 13.385 9.666 14.543 8.169 15.403 6.672 16.264 5.015 16.807 3.3 17M16.8 13.6C14.815 17.114 11.614 19.781 7.8 21.1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7 17C19.661 15.624 18.355 14.471 16.86 13.612 15.365 12.753 13.712 12.204 12 12 10.699 8.794 10.699 5.206 12 2M6.3 3.8C5.518 7.737 6.193 11.824 8.2 15.3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
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
          d="M11.1 7.1C15.097 7.073 18.969 8.494 22 11.1M12 12C10.97 13.385 9.666 14.543 8.169 15.403 6.672 16.264 5.015 16.807 3.3 17M16.8 13.6C14.815 17.114 11.614 19.781 7.8 21.1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7 17C19.661 15.624 18.355 14.471 16.86 13.612 15.365 12.753 13.712 12.204 12 12 10.699 8.794 10.699 5.206 12 2M6.3 3.8C5.518 7.737 6.193 11.824 8.2 15.3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Volleyball doesn't support ${type}`);
  return null;
});

Volleyball.displayName = "Volleyball";

Volleyball.metadata = {
  name: "Volleyball",
  category: "stroke/sports",
  tags: ["volleyball", "icon"],
  description: "Volleyball icon from stroke/sports category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Volleyball;
