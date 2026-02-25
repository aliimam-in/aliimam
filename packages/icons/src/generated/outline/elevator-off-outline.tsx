/**
 * Auto-generated logo component: Elevator Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ElevatorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ElevatorOffOutlineLogo = React.forwardRef<SVGSVGElement, ElevatorOffOutlineLogoProps>(
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
      <path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14" />
  <path d="M12 8l2 2" />
  <path d="M10 14l2 2l2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ElevatorOffOutlineLogo.displayName = "ElevatorOffOutlineLogo";

export const ElevatorOffOutlineLogoMetadata = {
  id: "elevator-off-outline",
  baseId: "elevator-off-outline",
  variant: "default",
  name: "Elevator Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ElevatorOffOutlineLogo;
