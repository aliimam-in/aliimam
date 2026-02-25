/**
 * Auto-generated logo component: Mars Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarsOutlineLogo = React.forwardRef<SVGSVGElement, MarsOutlineLogoProps>(
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
      <path d="M5 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M19 5l-5.4 5.4" />
  <path d="M19 5l-5 0" />
  <path d="M19 5l0 5" />
    </svg>
  )
);

MarsOutlineLogo.displayName = "MarsOutlineLogo";

export const MarsOutlineLogoMetadata = {
  id: "mars-outline",
  baseId: "mars-outline",
  variant: "default",
  name: "Mars Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarsOutlineLogo;
