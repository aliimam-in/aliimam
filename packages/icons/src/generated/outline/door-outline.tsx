/**
 * Auto-generated logo component: Door Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DoorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DoorOutlineLogo = React.forwardRef<SVGSVGElement, DoorOutlineLogoProps>(
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
      <path d="M14 12v.01" />
  <path d="M3 21h18" />
  <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
    </svg>
  )
);

DoorOutlineLogo.displayName = "DoorOutlineLogo";

export const DoorOutlineLogoMetadata = {
  id: "door-outline",
  baseId: "door-outline",
  variant: "default",
  name: "Door Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DoorOutlineLogo;
