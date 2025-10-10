import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WavesProps extends IconProps {
  type?: "stroke";
}

export const Waves: IconComponent<WavesProps> = React.forwardRef<
  SVGSVGElement,
  WavesProps
>(function Waves(
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
          d="M2 6C2.6 6.5 3.2 7 4.5 7 7 7 7 5 9.5 5 12.1 5 11.9 7 14.5 7 17 7 17 5 19.5 5 20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13 7 13 7 11 9.5 11 12.1 11 11.9 13 14.5 13 17 13 17 11 19.5 11 20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19 7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17 20.8 17 21.4 17.5 22 18"
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
          d="M2 6C2.6 6.5 3.2 7 4.5 7 7 7 7 5 9.5 5 12.1 5 11.9 7 14.5 7 17 7 17 5 19.5 5 20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13 7 13 7 11 9.5 11 12.1 11 11.9 13 14.5 13 17 13 17 11 19.5 11 20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19 7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17 20.8 17 21.4 17.5 22 18"
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
          d="M2 6C2.6 6.5 3.2 7 4.5 7 7 7 7 5 9.5 5 12.1 5 11.9 7 14.5 7 17 7 17 5 19.5 5 20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13 7 13 7 11 9.5 11 12.1 11 11.9 13 14.5 13 17 13 17 11 19.5 11 20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19 7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17 20.8 17 21.4 17.5 22 18"
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
          d="M2 6C2.6 6.5 3.2 7 4.5 7 7 7 7 5 9.5 5 12.1 5 11.9 7 14.5 7 17 7 17 5 19.5 5 20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13 7 13 7 11 9.5 11 12.1 11 11.9 13 14.5 13 17 13 17 11 19.5 11 20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19 7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17 20.8 17 21.4 17.5 22 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Waves doesn't support ${type}`);
  return null;
});

Waves.displayName = "Waves";

Waves.metadata = {
  name: "Waves",
  category: "stroke/sustainability",
  tags: ["waves", "icon"],
  description: "Waves icon from stroke/sustainability category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Waves;
