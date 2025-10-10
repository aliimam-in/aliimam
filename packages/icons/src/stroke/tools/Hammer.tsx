import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HammerProps extends IconProps {
  type?: "stroke";
}

export const Hammer: IconComponent<HammerProps> = React.forwardRef<
  SVGSVGElement,
  HammerProps
>(function Hammer(
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
          d="M15 12 5.627 21.373C5.43 21.57 5.196 21.726 4.939 21.833 4.681 21.94 4.406 21.995 4.127 21.995 3.564 21.995 3.025 21.771 2.627 21.374 2.229 20.976 2.005 20.436 2.005 19.873 2.005 19.311 2.228 18.771 2.626 18.373L12 9M18 15 22 11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5 11.5L19.586 9.586C19.2109 9.21101 19.0001 8.70239 19 8.172V7.828C18.9999 7.29761 18.7891 6.78899 18.414 6.414L16.757 4.757C15.6321 3.63232 14.1067 3.00034 12.516 3H9L10.243 4.243C11.3679 5.36812 11.9999 6.89397 12 8.485V10L14 12H15.172C15.7024 12.0001 16.211 12.2109 16.586 12.586L18.5 14.5"
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
          d="M15 12 5.627 21.373C5.43 21.57 5.196 21.726 4.939 21.833 4.681 21.94 4.406 21.995 4.127 21.995 3.564 21.995 3.025 21.771 2.627 21.374 2.229 20.976 2.005 20.436 2.005 19.873 2.005 19.311 2.228 18.771 2.626 18.373L12 9M18 15 22 11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5 11.5L19.586 9.586C19.2109 9.21101 19.0001 8.70239 19 8.172V7.828C18.9999 7.29761 18.7891 6.78899 18.414 6.414L16.757 4.757C15.6321 3.63232 14.1067 3.00034 12.516 3H9L10.243 4.243C11.3679 5.36812 11.9999 6.89397 12 8.485V10L14 12H15.172C15.7024 12.0001 16.211 12.2109 16.586 12.586L18.5 14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Hammer doesn't support ${type}`);
  return null;
});

Hammer.displayName = "Hammer";

Hammer.metadata = {
  name: "Hammer",
  category: "stroke/tools",
  tags: ["hammer", "icon"],
  description: "Hammer icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hammer;
