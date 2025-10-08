import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RocketProps extends IconProps {
  type?: "stroke";
}

export const Rocket: IconComponent<RocketProps> = React.forwardRef<
  SVGSVGElement,
  RocketProps
>(function Rocket(
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
          d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5 2.5 21.5 6.24 21 7.5 19.5 8.21 18.66 8.2 17.37 7.41 16.59 7.021 16.219 6.509 16.005 5.972 15.988 5.435 15.971 4.911 16.154 4.5 16.5ZM12 15 9 12C9.532 10.619 10.202 9.296 11 8.05 12.165 6.187 13.788 4.653 15.713 3.594 17.638 2.535 19.803 1.986 22 2 22 4.72 21.22 9.5 16 13 14.737 13.799 13.397 14.469 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12H4C4 12 4.55 8.97 6 8 7.62 6.92 11 8 11 8M12 15V20C12 20 15.03 19.45 16 18 17.08 16.38 16 13 16 13"
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
          d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5 2.5 21.5 6.24 21 7.5 19.5 8.21 18.66 8.2 17.37 7.41 16.59 7.021 16.219 6.509 16.005 5.972 15.988 5.435 15.971 4.911 16.154 4.5 16.5ZM12 15 9 12C9.532 10.619 10.202 9.296 11 8.05 12.165 6.187 13.788 4.653 15.713 3.594 17.638 2.535 19.803 1.986 22 2 22 4.72 21.22 9.5 16 13 14.737 13.799 13.397 14.469 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12H4C4 12 4.55 8.97 6 8 7.62 6.92 11 8 11 8M12 15V20C12 20 15.03 19.45 16 18 17.08 16.38 16 13 16 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Rocket doesn't support ${type}`);
  return null;
});

Rocket.displayName = "Rocket";

Rocket.metadata = {
  name: "Rocket",
  category: "stroke/gaming",
  tags: ["rocket", "icon"],
  description: "Rocket icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rocket;
