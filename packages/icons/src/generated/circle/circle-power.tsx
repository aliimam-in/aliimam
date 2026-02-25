/**
 * Auto-generated logo component: Circle Power (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePowerLogo = React.forwardRef<SVGSVGElement, CirclePowerLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 7v4" />
  <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
    </svg>
  )
);

CirclePowerLogo.displayName = "CirclePowerLogo";

export const CirclePowerLogoMetadata = {
  id: "circle-power",
  baseId: "circle-power",
  variant: "default",
  name: "Circle Power",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePowerLogo;
