/**
 * Auto-generated logo component: Citrus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CitrusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CitrusLogo = React.forwardRef<SVGSVGElement, CitrusLogoProps>(
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
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
  <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
  <path d="m14 10-5.5 5.5" />
  <path d="M14 17.85V10H6.15" />
    </svg>
  )
);

CitrusLogo.displayName = "CitrusLogo";

export const CitrusLogoMetadata = {
  id: "citrus",
  baseId: "citrus",
  variant: "default",
  name: "Citrus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CitrusLogo;
