/**
 * Auto-generated logo component: Door Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DoorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DoorOffOutlineLogo = React.forwardRef<SVGSVGElement, DoorOffOutlineLogoProps>(
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
      <path d="M3 21h18" />
  <path d="M6 21v-15" />
  <path d="M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" />
  <path d="M18 18v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DoorOffOutlineLogo.displayName = "DoorOffOutlineLogo";

export const DoorOffOutlineLogoMetadata = {
  id: "door-off-outline",
  baseId: "door-off-outline",
  variant: "default",
  name: "Door Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DoorOffOutlineLogo;
