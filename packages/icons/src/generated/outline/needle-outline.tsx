/**
 * Auto-generated logo component: Needle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NeedleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NeedleOutlineLogo = React.forwardRef<SVGSVGElement, NeedleOutlineLogoProps>(
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
      <path d="M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918" />
  <path d="M17.5 6.5l-1 1" />
    </svg>
  )
);

NeedleOutlineLogo.displayName = "NeedleOutlineLogo";

export const NeedleOutlineLogoMetadata = {
  id: "needle-outline",
  baseId: "needle-outline",
  variant: "default",
  name: "Needle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NeedleOutlineLogo;
