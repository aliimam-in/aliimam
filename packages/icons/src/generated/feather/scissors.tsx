/**
 * Auto-generated logo component: Scissors (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScissorsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScissorsLogo = React.forwardRef<SVGSVGElement, ScissorsLogoProps>(
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
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  )
);

ScissorsLogo.displayName = "ScissorsLogo";

export const ScissorsLogoMetadata = {
  id: "scissors",
  baseId: "scissors",
  variant: "default",
  name: "Scissors",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScissorsLogo;
