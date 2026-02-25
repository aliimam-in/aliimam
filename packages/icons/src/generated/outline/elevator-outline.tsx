/**
 * Auto-generated logo component: Elevator Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ElevatorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ElevatorOutlineLogo = React.forwardRef<SVGSVGElement, ElevatorOutlineLogoProps>(
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
      <path d="M5 5a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M10 10l2 -2l2 2" />
  <path d="M10 14l2 2l2 -2" />
    </svg>
  )
);

ElevatorOutlineLogo.displayName = "ElevatorOutlineLogo";

export const ElevatorOutlineLogoMetadata = {
  id: "elevator-outline",
  baseId: "elevator-outline",
  variant: "default",
  name: "Elevator Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ElevatorOutlineLogo;
