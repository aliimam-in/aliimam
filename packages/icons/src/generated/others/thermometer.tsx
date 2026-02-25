/**
 * Auto-generated logo component: Thermometer (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThermometerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThermometerLogo = React.forwardRef<SVGSVGElement, ThermometerLogoProps>(
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
);

ThermometerLogo.displayName = "ThermometerLogo";

export const ThermometerLogoMetadata = {
  id: "thermometer",
  baseId: "thermometer",
  variant: "default",
  name: "Thermometer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThermometerLogo;
