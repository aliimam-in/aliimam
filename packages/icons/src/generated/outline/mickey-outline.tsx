/**
 * Auto-generated logo component: Mickey Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MickeyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MickeyOutlineLogo = React.forwardRef<SVGSVGElement, MickeyOutlineLogoProps>(
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
      <path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8a7.017 7.017 0 0 0 -2.424 2.1a3.5 3.5 0 1 1 -.826 -6.9" />
  <path d="M18.5 3a3.5 3.5 0 1 1 -.826 6.902a7.013 7.013 0 0 0 -2.424 -2.103a3.5 3.5 0 0 1 3.25 -4.799" />
  <path d="M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    </svg>
  )
);

MickeyOutlineLogo.displayName = "MickeyOutlineLogo";

export const MickeyOutlineLogoMetadata = {
  id: "mickey-outline",
  baseId: "mickey-outline",
  variant: "default",
  name: "Mickey Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MickeyOutlineLogo;
