/**
 * Auto-generated logo component: Box (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxLogo = React.forwardRef<SVGSVGElement, BoxLogoProps>(
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  )
);

BoxLogo.displayName = "BoxLogo";

export const BoxLogoMetadata = {
  id: "box",
  baseId: "box",
  variant: "default",
  name: "Box",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxLogo;
