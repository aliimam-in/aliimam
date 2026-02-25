/**
 * Auto-generated logo component: Thermometer Snowflake (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThermometerSnowflakeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThermometerSnowflakeLogo = React.forwardRef<SVGSVGElement, ThermometerSnowflakeLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m10 20-1.25-2.5L6 18" />
  <path d="M10 4 8.75 6.5 6 6" />
  <path d="M10.585 15H10" />
  <path d="M2 12h6.5L10 9" />
  <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
  <path d="m4 10 1.5 2L4 14" />
  <path d="m7 21 3-6-1.5-3" />
  <path d="m7 3 3 6h2" />
    </svg>
  )
);

ThermometerSnowflakeLogo.displayName = "ThermometerSnowflakeLogo";

export const ThermometerSnowflakeLogoMetadata = {
  id: "thermometer-snowflake",
  baseId: "thermometer-snowflake",
  variant: "default",
  name: "Thermometer Snowflake",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThermometerSnowflakeLogo;
