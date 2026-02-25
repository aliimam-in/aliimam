/**
 * Auto-generated logo component: Iteration Ccw (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IterationCcwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IterationCcwLogo = React.forwardRef<SVGSVGElement, IterationCcwLogoProps>(
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
      <path d="m16 14 4 4-4 4" />
  <path d="M20 10a8 8 0 1 0-8 8h8" />
    </svg>
  )
);

IterationCcwLogo.displayName = "IterationCcwLogo";

export const IterationCcwLogoMetadata = {
  id: "iteration-ccw",
  baseId: "iteration-ccw",
  variant: "default",
  name: "Iteration Ccw",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IterationCcwLogo;
