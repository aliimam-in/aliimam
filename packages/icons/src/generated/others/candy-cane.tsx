/**
 * Auto-generated logo component: Candy Cane (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CandyCaneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CandyCaneLogo = React.forwardRef<SVGSVGElement, CandyCaneLogoProps>(
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
      <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
  <path d="M17.75 7 15 2.1" />
  <path d="M10.9 4.8 13 9" />
  <path d="m7.9 9.7 2 4.4" />
  <path d="M4.9 14.7 7 18.9" />
    </svg>
  )
);

CandyCaneLogo.displayName = "CandyCaneLogo";

export const CandyCaneLogoMetadata = {
  id: "candy-cane",
  baseId: "candy-cane",
  variant: "default",
  name: "Candy Cane",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CandyCaneLogo;
