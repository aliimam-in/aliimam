import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RadicalProps extends IconProps {
  type?: "stroke";
}

export const Radical: IconComponent<RadicalProps> = React.forwardRef<
  SVGSVGElement,
  RadicalProps
>(function Radical(
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
          d="M3 12H6.28C6.48979 12.0002 6.69422 12.0663 6.86436 12.189C7.03449 12.3118 7.16171 12.485 7.228 12.684L9.526 20.618C9.56074 20.7208 9.62798 20.8095 9.71755 20.8707C9.80712 20.9319 9.91418 20.9623 10.0226 20.9574C10.1309 20.9524 10.2348 20.9123 10.3184 20.8432C10.402 20.774 10.4608 20.6795 10.486 20.574L13.82 4.771C13.8716 4.55183 13.9956 4.35647 14.172 4.21654C14.3484 4.07662 14.5668 4.00032 14.792 4H21"
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
          d="M3 12H6.28C6.48979 12.0002 6.69422 12.0663 6.86436 12.189C7.03449 12.3118 7.16171 12.485 7.228 12.684L9.526 20.618C9.56074 20.7208 9.62798 20.8095 9.71755 20.8707C9.80712 20.9319 9.91418 20.9623 10.0226 20.9574C10.1309 20.9524 10.2348 20.9123 10.3184 20.8432C10.402 20.774 10.4608 20.6795 10.486 20.574L13.82 4.771C13.8716 4.55183 13.9956 4.35647 14.172 4.21654C14.3484 4.07662 14.5668 4.00032 14.792 4H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Radical doesn't support ${type}`);
  return null;
});

Radical.displayName = "Radical";

Radical.metadata = {
  name: "Radical",
  category: "stroke/mathematics",
  tags: ["radical", "icon"],
  description: "Radical icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Radical;
