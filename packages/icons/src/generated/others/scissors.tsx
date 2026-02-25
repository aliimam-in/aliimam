/**
 * Auto-generated logo component: Scissors (default)
 * Category: others
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
      <circle cx="6" cy="6" r="3" />
  <path d="M8.12 8.12 12 12" />
  <path d="M20 4 8.12 15.88" />
  <circle cx="6" cy="18" r="3" />
  <path d="M14.8 14.8 20 20" />
    </svg>
  )
);

ScissorsLogo.displayName = "ScissorsLogo";

export const ScissorsLogoMetadata = {
  id: "scissors",
  baseId: "scissors",
  variant: "default",
  name: "Scissors",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScissorsLogo;
