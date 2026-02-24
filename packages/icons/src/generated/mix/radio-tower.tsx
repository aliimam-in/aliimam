/**
 * Auto-generated logo component: Radio Tower (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioTowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioTowerLogo = React.forwardRef<SVGSVGElement, RadioTowerLogoProps>(
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
      <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
  <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
  <circle cx="12" cy="9" r="2" />
  <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
  <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
  <path d="M9.5 18h5" />
  <path d="m8 22 4-11 4 11" />
    </svg>
  )
);

RadioTowerLogo.displayName = "RadioTowerLogo";

export const RadioTowerLogoMetadata = {
  id: "radio-tower",
  baseId: "radio-tower",
  variant: "default",
  name: "Radio Tower",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioTowerLogo;
