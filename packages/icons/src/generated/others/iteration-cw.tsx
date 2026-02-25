/**
 * Auto-generated logo component: Iteration Cw (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IterationCwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IterationCwLogo = React.forwardRef<SVGSVGElement, IterationCwLogoProps>(
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
      <path d="M4 10a8 8 0 1 1 8 8H4" />
  <path d="m8 22-4-4 4-4" />
    </svg>
  )
);

IterationCwLogo.displayName = "IterationCwLogo";

export const IterationCwLogoMetadata = {
  id: "iteration-cw",
  baseId: "iteration-cw",
  variant: "default",
  name: "Iteration Cw",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IterationCwLogo;
