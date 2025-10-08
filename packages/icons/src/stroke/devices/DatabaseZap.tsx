import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DatabaseZapProps extends IconProps {
  type?: "stroke";
}

export const DatabaseZap: IconComponent<DatabaseZapProps> = React.forwardRef<
  SVGSVGElement,
  DatabaseZapProps
>(function DatabaseZap(
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
          d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 5V19C2.995 19.481 3.336 19.955 3.995 20.383 4.655 20.811 5.613 21.179 6.79 21.458 7.966 21.736 9.326 21.916 10.755 21.983 12.184 22.049 13.64 22 15 21.84M21 5V8M21 12 18 17H22L19 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12C3.00145 12.4675 3.33069 12.9285 3.96146 13.3461C4.59222 13.7636 5.50706 14.1263 6.63296 14.4051C7.75887 14.6839 9.06468 14.8711 10.4462 14.9519C11.8277 15.0326 13.2467 15.0045 14.59 14.87"
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
          d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 5V19C2.995 19.481 3.336 19.955 3.995 20.383 4.655 20.811 5.613 21.179 6.79 21.458 7.966 21.736 9.326 21.916 10.755 21.983 12.184 22.049 13.64 22 15 21.84M21 5V8M21 12 18 17H22L19 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12C3.00145 12.4675 3.33069 12.9285 3.96146 13.3461C4.59222 13.7636 5.50706 14.1263 6.63296 14.4051C7.75887 14.6839 9.06468 14.8711 10.4462 14.9519C11.8277 15.0326 13.2467 15.0045 14.59 14.87"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DatabaseZap doesn't support ${type}`);
  return null;
});

DatabaseZap.displayName = "DatabaseZap";

DatabaseZap.metadata = {
  name: "DatabaseZap",
  category: "stroke/devices",
  tags: ["database", "zap", "icon"],
  description: "DatabaseZap icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DatabaseZap;
